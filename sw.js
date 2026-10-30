// Minimal service worker: lets the app be added to the home screen.
// Always uses the network so reports and the page are never stale.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
