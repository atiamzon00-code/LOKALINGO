// Service Worker for LokaLingo PWA
const CACHE_NAME = 'lokalingo-cache-v1';
// List of core files to precache (relative paths)
const urlsToCache = [
  './',
  'index.html',
  'style.css',
  'script.js',
  'manifest.json',
  // Assumed icon paths
  'icons/lingo-icon-192.png',
  'icons/lingo-icon-512.png',
  'icons/maskable-lingo.png',
  // External resource links (Font Awesome and any other large CDN assets)
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css'
];

// --- 1. Installation: Precaching ---
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installing...');
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[Service Worker] Pre-caching core assets:', urlsToCache);
        return cache.addAll(urlsToCache).catch(error => {
            console.error('[Service Worker] Failed to cache some assets:', error);
            // Non-fatal, installation proceeds
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
  return self.clients.claim(); // Ensures the service worker takes control immediately
});

// --- 3. Fetching: Cache-First strategy ---
self.addEventListener('fetch', (event) => {
  // Only intercept HTTP/HTTPS requests
  if (event.request.url.startsWith('http')) {
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          // 1. Cache hit - return response immediately
          if (response) {
            return response;
          }
          // 2. Cache miss - try fetching from network
          return fetch(event.request).then(
            (networkResponse) => {
              // 3. Clone the response to put one copy in cache and return the other
              if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
                const responseToCache = networkResponse.clone();
                caches.open(CACHE_NAME)
                  .then(cache => {
                    // Cache the new network resource for later use
                    cache.put(event.request, responseToCache);
                  });
              }
              // Return the original network response
              return networkResponse;
            }
          ).catch(error => {
            console.warn('[Service Worker] Fetch failed:', error);
            // Optional: return a fallback page for offline users if the fetch fails
          });
        }
      )
    );
  }
});