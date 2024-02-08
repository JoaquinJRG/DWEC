if (localStorage.getItem("datos") != null) {
    mostrarWeb(); 
}

//Registrar
document.getElementById("registrar").addEventListener("submit", (evento) => {
    evento.preventDefault();

    let nombre = document.querySelector("#registrar #nombre").value;
    let edad = document.querySelector("#registrar #edad").value;
    let sexo = document.querySelector("#registrar #sexo").value;
    let idioma = document.querySelector("#registrar #idioma").value;
    let color = document.querySelector("#registrar #color").value;

    let datos = { nombre, edad, sexo, idioma, color }

    localStorage.setItem("datos", JSON.stringify(datos));
});


//Login 
document.getElementById("login").addEventListener("submit", (evento) => {
    evento.preventDefault();

    let nombre = JSON.parse(localStorage.getItem("datos")).nombre;
    let nombreInput = document.querySelector("#login #login-nombre").value;

    if (nombre == nombreInput) {
        mostrarWeb();   
    } else {
        alert("Nombre incorrecto");
    }

});

//Logout 
document.getElementById("log-out").addEventListener("click", () => {
    document.getElementById("login-registrar").style.display = "flex";
    document.getElementById("web").style.display = "none";  
});


function mostrarWeb() {

    document.getElementById("login-registrar").style.display = "none"; 
    document.getElementById("web").style.display = "block";

    let datos = JSON.parse(localStorage.getItem("datos"));
    let main = document.querySelector("#web main");
    main.innerHTML = ""; 
    let texto = document.createElement("h1"); 
    texto.classList.add(datos.color); 
    
    switch (datos.idioma) {
        case "es":
            texto.innerHTML = "Hola 👋" + datos.nombre; 
            break;
        case "en":
            texto.innerHTML = "Hello 👋" + datos.nombre; 
            break;     
    }

    main.appendChild(texto); 

}

//Eliminar datos
document.querySelector("#eliminar").addEventListener("click", () => {
    localStorage.removeItem("datos"); 
}); 

//Modificar datos 
document.getElementById("cambiar").addEventListener("submit", (evento) => {
    evento.preventDefault();

    let nombre = document.querySelector("#cambiar #nombre").value;
    let edad = document.querySelector("#cambiar #edad").value;
    let sexo = document.querySelector("#cambiar #sexo").value;
    let idioma = document.querySelector("#cambiar #idioma").value;
    let color = document.querySelector("#cambiar #color").value;

    let datosNuevos = { nombre, edad, sexo, idioma, color }

    localStorage.setItem("datos", JSON.stringify(datosNuevos));
});