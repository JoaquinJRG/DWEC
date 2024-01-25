// Create a button that hides himself when pressed. After testing it, remove its eventlistener
let ocultarBtn = document.getElementById("ocultar"); 

ocultarBtn.addEventListener("click", ocultar);

function ocultar() {
    ocultarBtn.style.display = "none"
    ocultarBtn.removeEventListener("click", ocultar);
}

// Create three buttons as a group and assign them an event listener by using an object: 
// The first one must hide/show a text below itself
// The second one must show a window with any text
// The third one must console out a random text

let texto = document.getElementById("texto"); 

class manejador {
    constructor(elemento) {
        elemento.onclick = this.onClick.bind(this);
    }

    boton1(){
        texto.classList.toggle("ocultar"); 
    }
    boton2(){
        alert("random text"); 
    }
    boton3(){
        console.log("Random text")
    }

    onClick(event) {
        this[event.target.dataset.accion](); 
    }
}

new manejador(document.getElementById("botones")); 

// Create a box with a header, some text and a button that closes the box.

let closeBtn = document.querySelector("header button");

closeBtn.addEventListener("click", () => {
    document.querySelector("header").classList.toggle("ocultar");
})