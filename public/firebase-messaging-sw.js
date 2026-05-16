/**
 * EyeSense — Firebase Service Worker
 * ─────────────────────────────────────────────────────────
 * Bu dosyayı eyesense_v14.html ile AYNI KLASÖRE koy.
 * Firebase config'i kendi değerlerinle doldur (caregiver.html'deki ile aynı olmalı).
 *
 * Görev: Uygulama kapalıyken / arka plandayken FCM bildirimlerini göster.
 */

importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js');

/* ────────────────────────────────────────────
   Firebase Web App Config
   (Firebase Console → Proje Ayarları → Genel)
──────────────────────────────────────────── */
const firebaseConfig = {
  apiKey:            "AIzaSyAtJxtqc89Iyxk165LEFQCWzAj4N2K-7Xg",
  authDomain:        "eyesense-53f01.firebaseapp.com",
  projectId:         "eyesense-53f01",
  storageBucket:     "eyesense-53f01.firebasestorage.app",
  messagingSenderId: "577546876245",
  appId:             "1:577546876245:web:5cadd6c853ec23cb16abdc"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

/* ────────────────────────────────────────────
   Arka planda gelen bildirimleri göster
──────────────────────────────────────────── */
messaging.onBackgroundMessage((payload) => {
  console.log('[EyeSense SW] Arka plan bildirimi:', payload);

  const title = payload.notification?.title || 'EyeSense';
  const body  = payload.notification?.body  || payload.data?.message || '';

  // Konum varsa yönlendirme butonu
  const actions = [];
  if (payload.data?.lat && payload.data?.lng) {
    actions.push({
      action: 'maps',
      title:  '📍 Konumu Görüntüle'
    });
  }

  self.registration.showNotification(title, {
    body,
    icon:    '/icon-192.png',
    badge:   '/icon-72.png',
    vibrate: [200, 100, 200, 100, 200],
    data:    payload.data || {},
    actions,
    tag:     'eyesense-alert',          // Aynı tag → eski bildirimi günceller
    renotify: true
  });
});

/* ────────────────────────────────────────────
   Bildirime tıklandığında
──────────────────────────────────────────── */
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  const data = event.notification.data || {};

  if (event.action === 'maps' && data.lat && data.lng) {
    const mapsUrl = `https://www.google.com/maps?q=${data.lat},${data.lng}`;
    event.waitUntil(clients.openWindow(mapsUrl));
    return;
  }

  // Varsayılan: caregiver.html'i aç
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((windowClients) => {
      for (const client of windowClients) {
        if (client.url.includes('caregiver') && 'focus' in client) {
          return client.focus();
        }
      }
      return clients.openWindow('/caregiver.html');
    })
  );
});