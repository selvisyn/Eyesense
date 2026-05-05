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

/* ── Statik dosyalar: public/ klasörü (style.css, HTML dosyaları vb.) ── */
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, _res, next) => {
  console.log(new Date().toISOString(), req.method, req.path);
  next();
});

app.get('/', (_req, res) => {
  res.json({ status: 'ok', service: 'EyeSense Notifier', firebaseReady, ts: new Date().toISOString() });
});

app.post('/api/register-token', async (req, res) => {
  const { contactId, token, deviceLabel } = req.body;
  if (contactId === undefined || contactId === null || !token) {
    return res.status(400).json({ error: 'contactId ve token gerekli' });
  }

  console.log('Token kayit istegi alindi, contactId:', contactId);

  try {
    if (db) {
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

  const title    = 'EyeSense — ' + contactName;
  const bodyText = (location && location.lat && location.lng && !isNaN(location.lat) && !isNaN(location.lng))
    ? message + ' 📍 ' + Number(location.lat).toFixed(4) + ', ' + Number(location.lng).toFixed(4)
    : message;

  const base = {
    notification: { title, body: bodyText },
    data: {
      message,
      lat:  location ? String(location.lat) : '',
      lng:  location ? String(location.lng) : '',
      ts:   timestamp || new Date().toISOString(),
      type: 'eyesense_qm'
    },
    android: { priority: 'high' },
    apns:    { payload: { aps: { sound: 'default', badge: 1 } } }
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

app.listen(PORT, () => {
  console.log('EyeSense Backend dinliyor, port:', PORT, '| Firebase:', firebaseReady ? 'hazir' : 'log-only');
});
