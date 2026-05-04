/**
 * EyeSense — Render Backend  (Node.js / Express)
 * ─────────────────────────────────────────────────
 * Endpoint'ler:
 *   POST /api/notify-caregiver   → FCM push bildirimi gönderir
 *   POST /api/register-token     → Refakatçinin FCM token'ını kaydeder
 *   GET  /api/tokens             → Kayıtlı token özeti (debug)
 *   GET  /                       → Sağlık kontrolü
 *
 * Render Kurulumu:
 *   Environment Variables → FIREBASE_SERVICE_ACCOUNT = serviceAccountKey.json içeriği
 */

const express = require('express');
const cors    = require('cors');
const admin   = require('firebase-admin');

const app  = express();
const PORT = process.env.PORT || 3000;

/* ══════════════════════════════════════════
   Firebase Admin SDK başlatma
══════════════════════════════════════════ */
let firebaseReady = false;

try {
  const raw = process.env.FIREBASE_SERVICE_ACCOUNT;
  if (!raw) throw new Error('FIREBASE_SERVICE_ACCOUNT env değişkeni tanımlı değil');

  const serviceAccount = JSON.parse(raw);
  if (!serviceAccount.project_id) throw new Error('service account JSON geçersiz (project_id yok)');

  admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });
  firebaseReady = true;
  console.log('✅ Firebase Admin başlatıldı →', serviceAccount.project_id);

} catch (err) {
  console.error('❌ Firebase Admin başlatılamadı:', err.message);
  console.warn('   Bildirimler LOG-ONLY modunda çalışacak.');
}

/* ══════════════════════════════════════════
   In-memory token kaydı
   (Kalıcılık için Firestore veya Redis kullanın)
══════════════════════════════════════════ */
const tokenStore = {};  // { contactId: [ { token, deviceLabel, registeredAt } ] }

function saveToken(contactId, token, deviceLabel = 'Bilinmiyor') {
  if (!tokenStore[contactId]) tokenStore[contactId] = [];
  const exists = tokenStore[contactId].some(t => t.token === token);
  if (!exists) {
    tokenStore[contactId].push({ token, deviceLabel, registeredAt: new Date().toISOString() });
    console.log('[Token] Kaydedildi → contactId:' + contactId + ' | ' + deviceLabel);
  }
}

function getTokens(contactId) {
  return (tokenStore[contactId] || []).map(t => t.token);
}

/* ══════════════════════════════════════════
   Middleware
══════════════════════════════════════════ */
app.use(cors({ origin: '*' }));
app.use(express.json({ limit: '50kb' }));

app.use((req, _res, next) => {
  console.log('[' + new Date().toISOString() + '] ' + req.method + ' ' + req.path);
  next();
});

/* ══════════════════════════════════════════
   GET  /  — Sağlık kontrolü
══════════════════════════════════════════ */
app.get('/', (_req, res) => {
  res.json({
    status:             'ok',
    service:            'EyeSense Notifier',
    firebaseReady,
    registeredContacts: Object.keys(tokenStore).length,
    ts:                 new Date().toISOString()
  });
});

/* ══════════════════════════════════════════
   POST /api/register-token
   Body: { contactId, token, deviceLabel? }
══════════════════════════════════════════ */
app.post('/api/register-token', (req, res) => {
  const { contactId, token, deviceLabel } = req.body;
  if (!contactId || !token) {
    return res.status(400).json({ error: 'contactId ve token gerekli' });
  }
  saveToken(String(contactId), token, deviceLabel || 'Refakatçi Cihazı');
  res.json({ success: true, contactId, tokenCount: tokenStore[String(contactId)].length });
});

/* ══════════════════════════════════════════
   GET /api/tokens  — Debug
══════════════════════════════════════════ */
app.get('/api/tokens', (_req, res) => {
  const summary = {};
  for (const [id, arr] of Object.entries(tokenStore)) {
    summary[id] = arr.map(t => ({
      deviceLabel:  t.deviceLabel,
      registeredAt: t.registeredAt,
      tokenTail:    t.token.slice(-8)
    }));
  }
  res.json({ contacts: summary });
});

/* ══════════════════════════════════════════
   POST /api/notify-caregiver
   Body: { message, contactName, contactId?,
           fcmToken?, location?, timestamp?, lang? }
══════════════════════════════════════════ */
app.post('/api/notify-caregiver', async (req, res) => {
  const {
    message,
    contactName = 'Refakatçi',
    contactId,
    fcmToken,
    location,
    timestamp,
    lang = 'tr'
  } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'message alanı gerekli' });
  }

  const tokens = new Set();
  if (fcmToken)  tokens.add(fcmToken);
  if (contactId) getTokens(String(contactId)).forEach(t => tokens.add(t));

  if (!firebaseReady) {
    console.log('[LOG-ONLY] mesaj:"' + message + '" | kişi:' + contactName + ' | tokenSayısı:' + tokens.size);
    return res.json({ success: true, mode: 'log-only', message, tokenCount: tokens.size });
  }

  if (tokens.size === 0) {
    console.log('[Bildirim] Token yok — mesaj:"' + message + '"');
    return res.json({ success: true, mode: 'no-token', message });
  }

  const title    = 'EyeSense — ' + contactName;
  const bodyText = location
    ? message + ' \uD83D\uDCCD ' + Number(location.lat).toFixed(4) + ', ' + Number(location.lng).toFixed(4)
    : message;

  const fcmPayload = {
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

  const results  = [];
  const failures = [];

  for (const token of tokens) {
    try {
      const msgId = await admin.messaging().send({ ...fcmPayload, token });
      results.push({ token: token.slice(-8), msgId });
      console.log('[Bildirim] Gönderildi → ' + contactName + ' | msgId:' + msgId);
    } catch (err) {
      failures.push({ token: token.slice(-8), error: err.message });
      console.error('[Bildirim] Hata → ' + token.slice(-8) + ' | ' + err.message);
    }
  }

  if (results.length > 0) {
    return res.json({ success: true, sent: results.length, failed: failures.length, results });
  } else {
    return res.status(500).json({ success: false, error: 'Tüm tokenlar başarısız', failures });
  }
});

/* ══════════════════════════════════════════
   Sunucu başlat
══════════════════════════════════════════ */
app.listen(PORT, () => {
  console.log('\nEyeSense Backend → http://localhost:' + PORT);
  console.log('Firebase : ' + (firebaseReady ? 'hazır' : 'log-only') + '\n');
});
