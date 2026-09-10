importScripts('https://jsdelivr.net');
importScripts('/studdy-app/uv.config.js');
importScripts('https://jsdelivr.net');

const uv = new Ultraviolet({
    config: self.__uv$config,
    worker: true
});

self.addEventListener('fetch', (event) => {
    if (event.request.url.startsWith(location.origin + self.__uv$config.prefix)) {
        event.respondWith(uv.fetch(event));
    }
});
