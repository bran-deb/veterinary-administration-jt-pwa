//nombre del cache
const nombreCache = 'apv-v1'
///archivos que vamos a cachear

const archivos = [
    "/",
    "index.html",
    '/error.html',
    "./css/bootstrap.css",
    "./css/styles.css",
    "./js/app.js",
    "./js/apv.js",
    'manifest.json'
]

//cuando se instala el service worker
self.addEventListener('install', e => {
    //solo se ejecuta una vez(la primera vez que se instala)
    console.log('Instalado el service worker')

    //espera hasta que se descarga los caches
    e.waitUntil(
        caches.open(nombreCache)
            .then(cache => {
                console.log('cacheando')
                cache.addAll(archivos)          //se agrega al cache(array archivos)
            })
    )
})


//activar el service worker
self.addEventListener('activate', e => {
    console.log('Service worker activado')

    //esperamos hasta que se cumpla
    e.waitUntil(
        caches.keys()
            .then(keys => {
                console.log(keys)

                return Promise.all(             //comparamos las versiones con la ver actuak
                    keys.filter(key => key !== nombreCache)     //retornamos las versiones pasadas
                        .map(key => caches.delete(key))         //eliminamos las versiones pasadas
                )
            })
    )
})

self.addEventListener('fetch', e => {
    console.log('Fetch', e)

    //usamos la cache
    e.respondWith(
        caches.match(e.request)     //revisamos el request
            .then(respuestaCache => {   //si es igual al cache retornamos cache
                return (respuestaCache ? respuestaCache : caches.match(errorPagina))
            })
            .catch(() => caches.match("/error.html")) //mandamos a error.html
    )
})