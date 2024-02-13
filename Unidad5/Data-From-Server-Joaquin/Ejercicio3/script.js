const ul = document.querySelector("ul"); 

document.querySelector("input").addEventListener("input", (e) => {
    if (e.target.value != "") {

        ul.innerHTML = ""; 

        fetch(`cities.php?startText=${e.target.value}`)
            .then(response => response.json())
            .then(data => {
                    data.forEach(city => {
                        let li = document.createElement("li"); 
                        li.innerText = city; 
                        ul.appendChild(li); 
                    });
            });

    } else {
        ul.innerHTML = ""; 
    }
}); 
