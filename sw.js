// Minimal service worker so Android offers "Install app". It does not cache anything:
// checklists always come live from the sheet.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (e) {
  if (e.request.mode === 'navigate') e.respondWith(fetch(e.request));
});
