//registramos el service worker en el navegador
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
        .then(registrado => console.log('se registro correctamente...', registrado))
        .catch(error => console.log('fallo la instalacion', error))
} else {
    console.log('service workers no soportado')
}