const URL = "https://www.mozilla.org"; 

//Open a new window with a random URL. Change its URL once opened
document.querySelector("button").addEventListener("click", () => {
    location.assign(URL); 
    location.href = "https://www.google.com"; 
})