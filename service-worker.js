self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('simple-x-cache').then((cache) => {
      return cache.addAll([
        '/',
        'https://mobile.twitter.com/home',
        'https://x.com/i/lists/1918130237239640416',
        'https://x.com/i/lists/1917011727113457852'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
