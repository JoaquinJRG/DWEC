const URL = "https://www.mozilla.org"; 

let newWindow = window.open(URL); 


setTimeout(function() {
    newWindow.location.href = "https://www.google.es"; 
}, 2000)


setTimeout(function() {
    newWindow.location.reload(true);
}, 4000)
