const URL = "https://www.mozilla.org";

let newWindow = window.open(URL);

setTimeout(function () {
    newWindow.location.href = "https://www.google.es";
}, 2000)

setTimeout(function () {
    newWindow.location.reload(true); 
}, 4000)

setTimeout(function () {
    console.log("Protocol: " + location.protocol);
    console.log("Hostname: " + location.hostname);
    console.log("Host: " + location.host);
    console.log("Port: " + location.port);
}, 5000)

