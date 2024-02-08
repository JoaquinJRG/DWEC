

document.getElementById("geo").addEventListener("click", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(muestraPosicion); 
    } else {
        alert("La geolocalización no está disponible.");
    }
});


function muestraPosicion(posicion) {
    let map = L.map('map').setView([posicion.coords.latitude, posicion.coords.longitude], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
}