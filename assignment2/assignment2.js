import { assignments } from "../assignments.js";
import { renderNav } from "../nav.js";
import { products } from "./products.js";


const rubrik = document.getElementById('rubrik');
const assignment = assignments.find(assignments => assignments.id === 'Uppgift 2');
const h3 = document.createElement('h3');
const h1 = document.createElement('h1');
const p = document.createElement('p');
const a = document.createElement('a');

h3.textContent = assignment.id;
h1.textContent = assignment.title;
a.href = "../index.html";
a.textContent = 'Tillbaka till start';

h3.textContent = products.name;

rubrik.append(h1, h3, a);
renderNav(1);




/*------- Footer --------*/
const footer = document.querySelector('footer');
p.textContent = 'footer information';
footer.append(p);


/*------- Kundkorg --------*/
 const basket = [];

function renderBasket() {
    const addedItems = document.getElementById('addedItems');
    if (!addedItems) return;

    addedItems.innerHTML = "";

    let sum = 0;
    // Render each item with a remove button
    basket.forEach((item, index) => {
        const li = document.createElement('li');
        li.classList.add('basket-item');

        const span = document.createElement('span');
        span.textContent = `${item.name} - ${item.price} kr`;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Ångra';
        removeBtn.classList.add('remove-btn');
        removeBtn.addEventListener('click', () => {
            // Ta bort den specifika varan från basket och rendera om
            basket.splice(index, 1);
            renderBasket();
        });

        li.appendChild(span);
        li.appendChild(removeBtn);
        addedItems.appendChild(li);

        sum += item.price;
    });

    const total = document.createElement('p');
    total.classList.add('total');
    total.textContent = `Totalt: ${sum} kr`;
    addedItems.appendChild(total);

}

function allProducts(product) {
    const div = document.createElement('div');
    div.classList.add('all');

    div.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h2>${product.name}</h2>
    <button class="buy-btn">Lägg i varukorg</button>
    <h4>Pris: ${product.price} kr</h4>
    <p>${product.description}</p>
    <p>Material: ${product.material}</p>
    <p>${product.category[0]} | ${product.category[1]} | ${product.category[2]} | ${product.category[3]}</p>
    <br>
    `;


    const buyBtn = div.querySelector('.buy-btn');
    if (buyBtn) {
        buyBtn.addEventListener('click', () => {
            basket.push(product);
            renderBasket();
        });
    }

    return div;
}

const productListEl = document.getElementById('productList') || document.querySelector('main');
for (const p of products) {
    productListEl.append(allProducts(p));
}

