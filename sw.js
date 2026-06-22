// SAUTER — minimal service worker
// Required for PWA installability and Web Share Target API
// No caching strategy — always fetches fresh from network

const VERSION = 'sauter-v1';

self.addEventListener('install', e => {
  e.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', e => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', e => {
  // Passthrough — let browser handle all requests normally
  e.respondWith(fetch(e.request));
});
