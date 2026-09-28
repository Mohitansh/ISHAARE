// --- ISHAARE SERVICE WORKER (v4 - Auto Update & Network First) ---
const CACHE_NAME = 'ishare-v4';
const assetsToCache = [
    './',
    './index.html',
    './style.css',
    './app.js',
    './manifest.json',
    './icon-192.png'
];

// Install Event
self.addEventListener('install', (event) => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(assetsToCache);
        })
    );
});

// Activate Event - Clean up old versions instantly
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.map((key) => {
                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            );
        }).then(() => {
            return self.clients.claim();
        })
    );
});

// Fetch Event - Network First (Always tries to fetch fresh code first, falls back to cache if offline)
self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request)
            .then((response) => {
                // If network fetch succeeds, return it fresh
                return response;
            })
            .catch(() => {
                // If offline, fallback to cached version
                return caches.match(event.request);
            })
    );
});
