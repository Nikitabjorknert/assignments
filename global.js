const listNav = {
    list: "Uppgift: ",
    assignment: ["Uppgift 1", "Uppgift 2", "Uppgift 3"]
}; 

const globalNav = document.getElementById("globalNav");

const assignment = listNav.assignment.join(", ");


const current = localStorage.getItem("current");
if (current) {
    globalNav.value = current;
}

globalNav.addEventListener('click', function() {
    localStorage.setItem("current", globalNav.value);
});
console.log("Byt sida");

const allU = document.querySelectorAll("[li]");
let currentU = "marked";
if (localStorage.getItem('selectedU')) {
    currentU = localStorage.getItem('selectedItem');
}