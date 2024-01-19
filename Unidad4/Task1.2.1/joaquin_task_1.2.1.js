// Downgrade the h1 tag to an h2 one
document.getElementById("titulo1").outerHTML = "<h2>Animales de compañía</h2>";

// Replace only h2 content with a new text
document.getElementsByTagName("h2")[0].innerText = "New Text";

// Modify the first image source and alt properties
let img = document.querySelector("img");
img.src = "https://picsum.photos/300"; 
img.alt = "Imagen aleatoria"; 

// Replace the text of any p tag with "Hello, I'm a paragraph"
[...document.getElementsByTagName("p")].forEach((p) => {
    p.innerText = "Hello, I'm a paragraph";
});

// Modify the second image text
document.getElementsByTagName("img")[1].alt = "new text"; 

// Assign a non-standard property to body called info-fecha and assign today's date
document.body.setAttribute("info-fecha", "13/01/2024")

// Modify first image alt text
document.querySelector("img").alt = "new alt text"; 

// Console out all first image attributes
[...document.querySelector("img").attributes].forEach((attribute) => {
    console.log(attribute);
});

// Change last image property "size" (after checking that exists)
let lastImg = document.getElementsByTagName("img")[1];

if(lastImg.hasAttribute("size")) {
    lastImg.setAttribute("size")
}

// Add an id="ultima_imagen" to the last image
lastImg.id = "ultima_imagen"; 

// Add an attribute tipo="parrafo" to all p
[...document.getElementsByTagName("p")].forEach((p) => {
    p.setAttribute("tipo", "parrafo"); 
});

// Add a text to each element in the list (must be scalable)
[...document.getElementsByTagName("li")].forEach((li) => {
    li.innerText += " text"; 
});


// Add a paragraph after the last element with a text counting the number of items in the list
let countLi = document.getElementById("count-li"); 
countLi.innerHTML = "Number of items: " + document.getElementsByTagName("li").length;

//Add a paragraph, at the end of the document, containing how many classes has the last paragraph of the first article and their names
let countClass = document.getElementById("count-classes");
countClass.innerHTML = "Number of classes: " + document.querySelector("article p:last-of-type").classList.length; 

//Add two classes to the previous paragraph: "clase1" and "clase2"
document.querySelector("article p:last-of-type").classList.add("clase1", "clase2");

//Remove the last created class
document.querySelector("article p:last-of-type").classList.remove("clase2");

//Add a boolean attribute to the first image
