self.addEventListener('install', event => {
  console.log('Service worker telepítve');
  event.waitUntil(
    caches.open('jatekpwa-v1').then(cache => {
      return cache.addAll([
        'index.html',
        'style.css',
        'script.js',
        'checker.js',
        'szavak.js'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
