const URL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"; 
const main = document.querySelector("main"); 
const article = document.querySelector("article"); 

fetch(URL)
    .then((response) => response.json())
    .then((data) =>{

        //Titulo
        let title = document.createElement("h1"); 
        title.innerHTML = data.squadName; 
        main.insertAdjacentElement("afterbegin", title);

        data.members.forEach(member => {
            let section = document.createElement("section"); 
            let ul = document.createElement("ul");

            section.innerHTML = `
                <p>
                    <b>Name:</b> ${member.name}
                </p>
                <p>
                    <b>Age:</b> ${member.age} 
                </p>
                <p>
                    <b>Secret Identity:</b> ${member.secretIdentity}
                </p>
                <p>
                    <b>Powers:</b> 
                </p>
            `;

            member.powers.forEach((power) => {
                let li = document.createElement("li");
                li.innerHTML = power; 
                ul.append(li);
            });

            section.appendChild(ul);
            article.appendChild(section); 
        });
    });     