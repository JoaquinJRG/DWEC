
const opciones = {
    enableHighAccuracy: true,
    maximumAge: 30000,
    timeout: 27000,
};

document.getElementById("geo").addEventListener("click", () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(muestraPosicion, muestraError, opciones);
    } else {
        alert("La geolocalización no está disponible.");
    }
});


function muestraPosicion(posicion) {
    console.log(posicion.coords.latitude, posicion.coords.longitude, posicion.coords.accuracy);
}

function muestraError() {

}