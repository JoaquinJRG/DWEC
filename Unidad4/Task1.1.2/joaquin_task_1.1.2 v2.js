//The table with id="age-table".
let ageTable = document.getElementById("age-table"); 

//All label elements inside that table (there should be 3 of them).
let tableLabels =  ageTable.querySelectorAll("label"); 

//The first td in that table (with the word “Age”).
let ageTd = document.querySelector("td[id*='age']"); 

//The form with name="search".
let form = document.querySelector("form[name='search-person']");


//The first input in that form.
let firstInput = form.querySelector("input[value='young']");


//The last input in that form.
let lastInput = form.querySelector("input[type='submit']");

