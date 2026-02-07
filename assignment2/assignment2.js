import { assignments } from "../assignments.js";
import { renderNav } from "../nav.js";
import { products } from "./products.js";


const rubrik = document.getElementById('rubrik');
const container = document.getElementById('container');
const assignment = assignments.find(assignments => assignments.id === 'Uppgift 2');
const h3 = document.createElement('h3');
const h1 = document.createElement('h1');
const p = document.createElement('p');
const a = document.createElement('a');

h3.textContent = assignment.id;
h1.textContent = assignment.title;
p.textContent = assignment.description;
a.href = "../index.html";
a.textContent = 'Tillbaka till start';

h3.textContent = products.name;

container.append(p);
rubrik.append(h1, h3, a);
renderNav(1);


function allProducts(product) {
    const productList = document.getElementById('productList');
    if (!productList) return;

    const div = document.createElement('div');
    div.classList.add('all');


 div.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <h5>Pis: ${product.price} kr</h5>
    <p>${product.description}</p>
    <p>${product.category.join(", ")}</p>
    <br>
    `;
    return div;
}

const main = document.querySelector('main');
for (const p of products) {
    main.append(allProducts(p));
}




