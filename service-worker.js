self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        '/',
        '/2024/',
        '/2024/index.html',
        '/2024/styles.css',
        '/2024/script.js',
        '/2024/images/icons/icon-72x72.png',
        '/2024/images/icons/icon-96x96.png',
        // Добавь сюда остальные ресурсы, которые нужно кэшировать
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
