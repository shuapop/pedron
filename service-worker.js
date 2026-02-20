const CACHE_NAME = 'site-static-v5';

const assets = [
    './',
    './index.html',
    './styles.css',
    './manifest.json',
    './icons/download-192x192.png',
    './icons/download-512x512.png'
];

// Install
self.addEventListener('install', evt => {
    evt.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(assets);
        })
    );
    self.skipWaiting();
});

// Activate
self.addEventListener('activate', evt => {
    evt.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys
                    .filter(key => key !== CACHE_NAME)
                    .map(key => caches.delete(key))
            );
        })
    );
    self.clients.claim();
});

// Fetch
self.addEventListener('fetch', evt => {
    evt.respondWith(
        caches.match(evt.request).then(response => {
            return response || fetch(evt.request);
        })
    );
});

