import { renderCards } from './index.js';

let data = [];

async function fetchData() {
    try {
    const response = await fetch('data/house.json');
    data = await response.json();
    console.log(data);
} catch (error) {
    console.log("error");
    error.classList.add('error');
    error.textContent = "Något gick fel";
}
renderCards(data);
}



fetchData();