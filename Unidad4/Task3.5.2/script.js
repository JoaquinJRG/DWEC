
if (localStorage.getItem("datosUsuario") != null) {
    let datos = JSON.parse( localStorage.getItem("datosUsuario") ); 
    let usuario = document.getElementById("usuario"); 
    let correo = document.getElementById("correo"); 

    usuario.value = datos.usuario; 
    correo.value = datos.correo; 
}


document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault(); 

    console.log("jkl");

    let usuario = document.getElementById("usuario").value; 
    let correo = document.getElementById("correo").value; 

    let datosUsuario = {usuario, correo}; 

    localStorage.setItem("datosUsuario", JSON.stringify(datosUsuario)); 

    alert("Datos guardados"); 
})