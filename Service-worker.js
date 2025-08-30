self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open('formlooper-cache-v1');
    await cache.addAll(['./', './index.html', './manifest.webmanifest']);
  })());
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k !== 'formlooper-cache-v1').map(k => caches.delete(k)));
  })());
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith((async () => {
    const cached = await caches.match(event.request);
    if (cached) return cached;
    try {
      const fresh = await fetch(event.request);
      return fresh;
    } catch (e) {
      // offline fallback: serve index for navigation requests
      if (event.request.mode === 'navigate') {
        return caches.match('./index.html');
      }
      throw e;
    }
  })());
});
