/*
Create a website that allows you to select a Marvel character and, once selected, 
presents information about comics they star in and comics they appear with more characters.
It must allow to click on these comics or characters to get more information about them. 
To achieve it, you must use marvel API
*/

const main = document.querySelector("main"); 
const section = document.getElementById("imagenes");
const info = document.getElementById("info"); 
const KEY = "0c6eb88502ec542a2a838fe48976a75a";
const HASH = "b8f4a31de3555f8d00b472367a4c9e08";

document.getElementById("nameInput").addEventListener("input", (e) => {
    let name = e.target.value; 

    if (name != "") {
        searchCharacters(name); 
    }

})


function searchCharacters(name) {
    section.innerHTML = ""; 
    fetch(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${name}&ts=1&apikey=${KEY}&hash=${HASH}`)
    .then(response => response.json())
    .then(json => {

        json.data?.results.forEach(character => {
            let div = document.createElement("div"); 
            let url = character.thumbnail.path + "." + character.thumbnail.extension;
            div.innerHTML = `
                <img src=${url} alt=${character.name}/>
                <p>${character.name}</p>
                <button onclick='characterInfo(${character.id})'>Information</button>
            `; 
            section.append(div); 
        });
        
    }); 

}


function characterInfo(id) {
    main.classList.toggle("dp_none");
    info.classList.toggle("dp_none");

    let name = document.getElementById("name");
    let characterImg = document.getElementById("characterImg");
    let description = document.getElementById("description"); 
    let list = document.querySelector("ul");
    list.innerHTML = "";
    characterImg.src = "";
    name.src = ""; 
    description.innerHTML = ""; 

    fetch(`http://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=${KEY}&hash=${HASH}`)
    .then(response => response.json())
    .then(json => {

        name.innerHTML = json.data.results[0].name; 
        description.innerHTML = json.data.results[0].description;
        characterImg.src = json.data.results[0].thumbnail.path + "." + json.data.results[0].thumbnail.extension; 

        console.log(json.data.results[0].comics);
        json.data.results[0].comics.items.forEach((comic) => {
            list.innerHTML += `
                <li>${comic.name}</li>
            `
        });
        
    }); 

}

document.getElementById("backBtn").addEventListener("click", () => {
    main.classList.toggle("dp_none");
    info.classList.toggle("dp_none");
})
