// Minimal PWA service worker — caches shell, works under any base (/, /MEVEST/, etc.)
const CACHE = 'mevest-v2-1';
// Derive the base path from the service worker's own scope. e.g. /MEVEST/ or /
const BASE = new URL(self.registration.scope).pathname;

function basePath(p) {
  // Ensure we always prefix with BASE (which already ends with /)
  if (p.startsWith('/')) p = p.slice(1);
  return BASE + p;
}

const SHELL = [
  BASE,
  basePath('index.html'),
  basePath('manifest.webmanifest'),
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(SHELL.map((u) => new Request(u, { cache: 'reload' }))))
      .then(() => self.skipWaiting())
      .catch(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  // Only handle same-origin requests
  if (url.origin !== self.location.origin) return;

  // For navigation requests (SPA), serve index.html from cache/network
  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request).catch(() => caches.match(basePath('index.html')).then((m) => m || caches.match(BASE)))
    );
    return;
  }

  const isAsset = url.pathname.startsWith(basePath('assets/')) || url.pathname.endsWith('.js') || url.pathname.endsWith('.css');
  const isShell = url.pathname === BASE || url.pathname === basePath('index.html') || url.pathname === basePath('manifest.webmanifest');
  if (isAsset || isShell) {
    e.respondWith(
      caches.match(e.request).then((m) => m || fetch(e.request).then((r) => {
        const copy = r.clone();
        caches.open(CACHE).then((c) => c.put(e.request, copy));
        return r;
      }).catch(() => m))
    );
  }
});
