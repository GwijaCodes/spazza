self.addEventListener('install', (e)=>{
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./", 
            "./src/app.css", 
            "./src/master.css",
            "./moreInfo.css",
            "./images"
        ])
        })
    );
})

self.addEventListener("fetch", e=>{
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    )
});

