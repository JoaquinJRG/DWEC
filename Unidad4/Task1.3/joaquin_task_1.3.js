// Create a temporary structure to store the structure created in the following step
let temporary = document.createDocumentFragment(); 

// Create a section with three children: a comment and two articles. Each one must have a paragraph and a link to www.duckduckgo.com
let section = document.createElement("section");
let comment = document.createComment("Comentario");
let article1 = document.createElement("article");
let link = document.createElement("a"); 
let p = document.createElement("p")
link.href = "www.duckduckgo.com"; 
link.innerHTML = "Enlace"

p.appendChild(link);
article1.appendChild(p);

section.appendChild(comment);
section.appendChild(article1);
temporary.appendChild(section);

// Attach the temporary structure to the real DOM
document.body.appendChild(temporary); 

// Clone the previous section to a new one
let clon = temporary.cloneNode(true); 

// Remove the content inserted at step 3
let borrar = document.querySelector("section:last-of-type");
let referencia = document.body.removeChild(borrar); 

// Check if the temporary structure exists and is connected to the DOM
console.log(temporary.isConnected);

// Connect the temporary structure to the DOM
document.body.appendChild(referencia);

// Remove all the elements on the list marked as vegetables

let verduras = document.querySelectorAll(".verdura"); 

[...verduras].forEach((verdura) => verdura.remove());

// Replace the paragraph of the first article inserted on step 7 with the last paragraph of the document
let sustituido = document.querySelector("article p"); 

// Insert a paragraph after any image with the name of the file

// Insert a comment before any image

// Insert a paragraph before the first and after the last child

// Replace all content of the first article inserted at step 7

// Repace, from the content of any article inserted at step 7, only paragraphs

// Insert a descriptive text before the article of the cat

// Insert a nice message about cats after its section

// Replace the mixed shopping list with two lists: one for vegetables and one for fruits
