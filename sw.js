// Service Worker for LokaLingo PWA
const CACHE_NAME = 'lokalingo-cache-v1';
// IMPORTANT: List all core files and ALL icon files for offline access.
const urlsToCache = [
  './',
  'index.html',
  'style.css',
  'script.js',
  'manifest.json',
  
  // --- PWA ICON CACHING ---
  // Ensure these paths match where you stored your resized logo icons
  'icons/lingo-icon-192.png',
  'icons/lingo-icon-512.png',
  'icons/lingo-icon-144.png',
  'icons/maskable-lingo.png',
  
  // External assets (Font Awesome)
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css'
];

// --- 1. Installation: Precaching ---
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing...');
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[Service Worker] Pre-caching core assets and icons:', urlsToCache);
        return cache.addAll(urlsToCache).catch(error => {
            console.error('[Service Worker] Failed to cache some assets (network issue or incorrect path):', error);
        });
      })
  );
});

// --- 2. Activation: Clean up old caches ---
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[Service Worker] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

// --- 3. Fetching: Cache-First strategy ---
self.addEventListener('fetch', (event) => {
  if (event.request.url.startsWith('http')) {
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          if (response) {
            return response;
          }
          return fetch(event.request).then(
            (networkResponse) => {
              if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
                const responseToCache = networkResponse.clone();
                caches.open(CACHE_NAME)
                  .then(cache => {
                    cache.put(event.request, responseToCache);
                  });
              }
              return networkResponse;
            }
          );
        }
      )
    );
  }
});
