import { assignments } from "../assignments.js";
import { renderNav } from "../nav.js";
import { products } from "./products.js";

//Från startsidan
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




/*------------ Uppgift 2 --------------*/
//Alla produkter och dess stuktur på sidan
function allProducts(product) {
    const div = document.createElement('div');
    div.classList.add('all');

    div.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h2>${product.name}</h2>
    <button class="buy-btn">Lägg i varukorg</button>
    <h4>Pris: ${product.price} kr</h4>
    <p>${product.description}</p>
    <p><b>Material:</b> ${product.material}</p>
    <p>${product.category[0]} | ${product.category[1]} | ${product.category[2]} | ${product.category[3]}</p>
    <br>
    `; //Jag ville att kategorierna skulle vara snyggt åtskilda och därför satte jag ett index på varje kategori i den enskild arrayen.

    //Knappen för att lägga till varan i varukorgen
    const buyBtn = div.querySelector('.buy-btn');
    if (buyBtn) {
        buyBtn.addEventListener('click', () => {
            

            // Kollar om produkten redan finns i korgen
            const existingItem = basket.find(item => item.id === product.id);
            
            if (existingItem) {
                // Om den finns ska count öka med 1 vid varje knapptryck
                existingItem.count++;
            } else {
                // Om den inte finns läggs den till med count: 1
                basket.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    count: 1
                });
            }
            
            renderBasket();
            saveBasket();
        });
    }

    return div;
}

//Går igenom hela produktlistan
const productListEl = document.getElementById('productList') || document.querySelector('main');
for (const p of products) {
    productListEl.append(allProducts(p));
}


/*------- Kundkorg --------*/
 const basket = [];

function renderBasket() {
    const addedItems = document.getElementById('addedItems');
    if (!addedItems) return;

    addedItems.innerHTML = "";
    let sum = 0;
   
    basket.forEach((item, index) => {
        const li = document.createElement('li');
        li.classList.add('basket-item');

        const span = document.createElement('span');
        span.textContent = `${item.count}: ${item.name} - ${item.price} kr`;
    
        /*------- Minska antalet av enskild produkt --------*/
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Ångra';
        removeBtn.classList.add('remove-btn');
        removeBtn.addEventListener('click', () => {
            
            if (item.count > 1) { //Om antalet är större än 1, ska antalet minska
                item.count -= 1;
            } else { //Om antalet är 1, ska hela produkten tas bort ur varukorgen
            basket.splice(index, 1);
            }
            renderBasket();
            saveBasket();
        });

        li.appendChild(span);
        li.appendChild(removeBtn);
        addedItems.appendChild(li);
        addedItems.appendChild(removeBtn);

        //Totala kostnaden, kopplat till produkterna. Vid tillagd produkt ökar även den totala summan
        sum += item.price * item.count;

        //Tömma hela varukorgen
         const emptyBasket = document.createElement('button');
        emptyBasket.textContent = 'Töm varukorg';
        emptyBasket.classList.add('empty');
        emptyBasket.addEventListener('click', () => {
             basket.splice(products);
             renderBasket();
        });
        addedItems.appendChild(emptyBasket);
    });

    const total = document.createElement('p');
    total.classList.add('total');
    total.textContent = `Totalt: ${sum} kr`;
    addedItems.appendChild(total);

    saveBasket();
}


/*------- Footer --------*/
const footer = document.querySelector('footer');
p.textContent = 'Nikita Björknert - Webbteknik 3: Uppgift 2';
footer.append(p);

/*--- Local Storage ---*/

function saveBasket() {
    localStorage.setItem('basket', JSON.stringify(basket));
}
function loadBasket() {
    const saved = localStorage.getItem('basket');
    if (saved) {
        basket.length = 0;
        localStorage.removeItem('basket');
        console.log('basket');
    }
    renderBasket();
}
loadBasket();

