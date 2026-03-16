
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

const rubrikDiv = document.createElement('header');
const rubrik = document.createElement('h1');
rubrik.textContent = "Spökhusbyrån"
rubrikDiv.append(rubrik);

fetchData();

const container = document.getElementById('card');

export function renderCards() {
    for (const d of data) {
    const div = document.createElement('div');
    div.classList.add('houseCards');

    div.innerHTML = `
    <img class="bilder" src="./images/${d.image}" alt="${d.name}">
    <h2>${d.name}</h2>
    <h4>${d.location}</h4>
    <p>Pris per natt: ${d.pricePerNight} kr</p>
    `;

    container.append(div);

    const pEl = document.createElement('p');
    pEl.textContent = d.scareLevel;

 if (d.scareLevel === 1) {
    pEl.textContent = "Mysigt";
 }
    else if (d.scareLevel === 2) {
        pEl.textContent = "Lite läskig";
    } else if (d.scareLevel === 3) {
        pEl.textContent = "Obehagligt";
    } else if (d.scareLevel === 4) { 
        pEl.textContent = "Läskigt";
    } else if (d.scareLevel === 5) { 
        pEl.textContent = "Mycket läskigt";
    }

    const btn = document.createElement('button');
    btn.textContent = "Läs mer och boka";
    btn.href = "house.html?id=1";

    div.appendChild(pEl);
    div.appendChild(btn);
}
}

