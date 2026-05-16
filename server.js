/**
 * EyeSense — Render Backend (Node.js / Express)
 * Token'lar Firestore'da kalici saklanir
 */

const express = require('express');
const cors    = require('cors');
const admin   = require('firebase-admin');
const path    = require('path');

const app  = express();
const PORT = process.env.PORT || 3000;

let firebaseReady = false;
let db = null;

try {
  const raw = process.env.FIREBASE_SERVICE_ACCOUNT;
  if (!raw) throw new Error('FIREBASE_SERVICE_ACCOUNT env yok');
  const sa = JSON.parse(raw);
  if (!sa.project_id) throw new Error('project_id yok');
  admin.initializeApp({ credential: admin.credential.cert(sa) });
  db = admin.firestore();
  firebaseReady = true;
  console.log('Firebase Admin hazir:', sa.project_id);
} catch (err) {
  console.error('Firebase baslatma hatasi:', err.message);
}

app.use(cors({ origin: '*' }));
app.use(express.json({ limit: '50kb' }));

/* ── Statik dosyalar: public/ klasörü ── */
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, _res, next) => {
  console.log(new Date().toISOString(), req.method, req.path);
  next();
});

app.get('/', (_req, res) => {
  res.json({ status: 'ok', service: 'EyeSense Notifier', firebaseReady, ts: new Date().toISOString() });
});

// ── TOKEN KAYIT ──
app.post('/api/register-token', async (req, res) => {
  const { contactId, token, deviceLabel } = req.body;
  if (contactId === undefined || contactId === null || !token) {
    return res.status(400).json({ error: 'contactId ve token gerekli' });
  }

  console.log('Token kayit istegi alindi, contactId:', contactId);

  try {
    if (db) {
      const oldSnap = await db.collection('fcm_tokens')
        .where('contactId', '==', String(contactId)).get();
      if (!oldSnap.empty) {
        const deletes = oldSnap.docs.map(d => d.ref.delete());
        await Promise.all(deletes);
        console.log('Eski tokenlar silindi, adet:', oldSnap.size);
      }

      const docId = String(contactId) + '_' + token.slice(-16);
      console.log('Firestore yaziliyor, docId:', docId);
      await db.collection('fcm_tokens').doc(docId).set({
        contactId: String(contactId),
        token,
        deviceLabel: deviceLabel || 'Refakatci Cihazi',
        updatedAt: new Date().toISOString()
      });
      console.log('Token Firestore kaydedildi OK, contactId:', contactId);
    } else {
      console.log('HATA: db null, Firestore baglantisi yok');
    }
    res.json({ success: true, contactId, stored: !!db });
  } catch (err) {
    console.error('Token kayit HATASI:', err.code, err.message);
    res.status(500).json({ error: err.message });
  }
});

// ── TOKEN LİSTESİ ──
app.get('/api/tokens', async (_req, res) => {
  try {
    if (!db) return res.json({ contacts: {}, note: 'Firestore yok' });
    const snap = await db.collection('fcm_tokens').get();
    const contacts = {};
    snap.forEach(doc => {
      const d = doc.data();
      if (!contacts[d.contactId]) contacts[d.contactId] = [];
      contacts[d.contactId].push({ deviceLabel: d.deviceLabel, tokenTail: d.token.slice(-8) });
    });
    res.json({ contacts });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ── BİLDİRİM GÖNDER ──
// Arkadaşının güncel versiyonu kullanıldı:
// - notification objesi yok → Capacitor pushNotificationReceived tetiklenir
// - konum kontrolü daha güvenli (null/undefined/NaN hepsi kontrol ediliyor)
// - android.notification ile bildirim görünümü sağlanıyor
app.post('/api/notify-caregiver', async (req, res) => {
  const { message, contactName = 'Refakatci', contactId, fcmToken, location, timestamp, lang = 'tr' } = req.body;
  if (!message) return res.status(400).json({ error: 'message gerekli' });

  const tokens = new Set();
  if (fcmToken) tokens.add(fcmToken);

  if (db && contactId !== undefined) {
    try {
      const snap = await db.collection('fcm_tokens').where('contactId', '==', String(contactId)).get();
      snap.forEach(doc => tokens.add(doc.data().token));
      console.log('Firestore token sayisi contactId', contactId, ':', snap.size);
    } catch (err) {
      console.error('Firestore okuma hatasi:', err.message);
    }
  }

  console.log('Toplam token sayisi:', tokens.size, '| mesaj:', message);

  if (!firebaseReady) {
    return res.json({ success: true, mode: 'log-only', message, tokenCount: tokens.size });
  }
  if (tokens.size === 0) {
    return res.json({ success: true, mode: 'no-token', message, hint: 'Refakatci panelinde Baglana basin' });
  }

  const title = 'EyeSense — ' + contactName;
  const hasLocation = location &&
    location.lat !== undefined && location.lat !== null && location.lat !== '' &&
    location.lng !== undefined && location.lng !== null && location.lng !== '' &&
    !isNaN(Number(location.lat)) && !isNaN(Number(location.lng));

  const latStr = hasLocation ? String(location.lat) : '';
  const lngStr = hasLocation ? String(location.lng) : '';

  const base = {
    data: {
      title,
      message,
      body:  message,
      lat:   latStr,
      lng:   lngStr,
      ts:    timestamp || new Date().toISOString(),
      type:  'eyesense_qm'
    },
    android: {
      priority: 'high',
      notification: {
        title,
        body: message,
        sound: 'default'
      }
    },
    apns: { payload: { aps: { sound: 'default', badge: 1 } } }
  };

  const results = [], failures = [];
  for (const token of tokens) {
    try {
      const msgId = await admin.messaging().send({ ...base, token });
      results.push({ token: token.slice(-8), msgId });
      console.log('Gonderildi OK:', token.slice(-8));
    } catch (err) {
      failures.push({ token: token.slice(-8), error: err.message });
      console.error('Gonderi hatasi:', token.slice(-8), err.message);
      if (err.code === 'messaging/registration-token-not-registered' && db) {
        try {
          const snap = await db.collection('fcm_tokens').where('token', '==', token).get();
          snap.forEach(doc => doc.ref.delete());
          console.log('Gecersiz token silindi');
        } catch(_) {}
      }
    }
  }

  if (results.length > 0) {
    res.json({ success: true, sent: results.length, failed: failures.length, results });
  } else {
    res.status(500).json({ success: false, error: 'Tum tokenlar basarisiz', failures });
  }
});


// ── GEMINI PROXY — keyler sadece burada, client'a hiç çıkmaz ──

const GEMINI_KEY_VISION = process.env.GEMINI_KEY_VISION || '';
const GEMINI_KEY_OCR    = process.env.GEMINI_KEY_OCR    || '';

async function callGemini(key, model, payload) {
  const fetch = (await import('node-fetch')).default;
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`;
  const resp = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  const data = await resp.json();
  if (!resp.ok) throw new Error(data?.error?.message || 'Gemini hata');
  return data;
}

app.post('/api/vision', async (req, res) => {
  if (!GEMINI_KEY_VISION) return res.status(500).json({ error: 'GEMINI_KEY_VISION tanimlanmamis' });
  try {
    const data = await callGemini(GEMINI_KEY_VISION, req.body.model || 'gemini-2.0-flash', req.body.payload);
    res.json(data);
  } catch (err) {
    console.error('Vision proxy hata:', err.message);
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/ocr', async (req, res) => {
  if (!GEMINI_KEY_OCR) return res.status(500).json({ error: 'GEMINI_KEY_OCR tanimlanmamis' });
  try {
    const data = await callGemini(GEMINI_KEY_OCR, req.body.model || 'gemini-2.0-flash', req.body.payload);
    res.json(data);
  } catch (err) {
    console.error('OCR proxy hata:', err.message);
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log('EyeSense Backend dinliyor, port:', PORT, '| Firebase:', firebaseReady ? 'hazir' : 'log-only');
});