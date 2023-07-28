//cache
self.addEventListener('install', (e)=>{
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll([
            "https://fonts.cdnfonts.com/css/romero",
            "https://fonts.cdnfonts.com/css/roboto",
            "https://unpkg.com/boxicons@2.1.4/dist/boxicons.js",
            "./images",
            "./",
            "./src/fallback.html",
        ])
        })
    );
})

//offline
self.addEventListener("fetch", e=>{
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        }).catch(() => caches.match('./src/fallback.html'))
    )
});



