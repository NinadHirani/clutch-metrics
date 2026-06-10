// Clutch Metrics — Service Worker
// Bump CACHE_NAME (e.g. v2, v3) whenever you deploy a new version
const CACHE_NAME = 'clutch-metrics-v1';

// Static assets to pre-cache on install
const STATIC_ASSETS = [
  './',
  'index.html',
  'manifest.json',
  'icons/icon-192.png',
  'icons/icon-512.png'
];

// ── Install: pre-cache static shell ─────────────────────────────────────────
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Pre-caching static assets');
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting(); // Activate immediately without waiting for old tabs to close
});

// ── Activate: delete old caches ──────────────────────────────────────────────
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => {
            console.log('[SW] Removing old cache:', name);
            return caches.delete(name);
          })
      )
    )
  );
  self.clients.claim(); // Take control of all open pages immediately
});

// ── Fetch: network-first for Firebase/CDN, cache-first for local assets ──────
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // These external hosts must ALWAYS go to the network — never cache them.
  // Firebase Auth tokens, Firestore data, and CDN scripts must be live.
  const networkOnlyHosts = [
    'firebaseapp.com',
    'googleapis.com',
    'gstatic.com',
    'cloudfunctions.net',
    'firestore.googleapis.com',
    'identitytoolkit.googleapis.com',
    'securetoken.googleapis.com',
    'tailwindcss.com',
    'jsdelivr.net',
    'fonts.googleapis.com',
    'fonts.gstatic.com'
  ];

  if (networkOnlyHosts.some((host) => url.hostname.includes(host))) {
    return; // Pass through to network, no caching
  }

  // For same-origin requests: try network first, fall back to cache
  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        if (event.request.method === 'GET' && networkResponse.status === 200) {
          const cloned = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, cloned));
        }
        return networkResponse;
      })
      .catch(() => {
        return caches.match(event.request).then((cached) => {
          if (cached) return cached;
          // For navigation requests, serve cached index.html as fallback
          if (event.request.mode === 'navigate') {
            return caches.match('index.html');
          }
        });
      })
  );
});
