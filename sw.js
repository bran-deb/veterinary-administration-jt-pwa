//cacheamos datos para la app ofline
const nombreCache = 'apv-v1'
const archivos = [
    '/',
    'index.html',
    '/css/bootstrap.css',
    '/css/styles',
    '/js/app.js',
    '/js/apv/js'
]

//cuando se instala el service worker
self.addEventListener('install', e => {
    //solo se ejecuta una vez(la primera vez que se instala)
    console.log('Instalado el service worker')

    console.log(e)
})


//activar el service worker
self.addEventListener('activate', e => {
    console.log('Service worker activado')

    console.log(e)
})

self.addEventListener('fetch', e => {
    console.log('Fetch', e)
})