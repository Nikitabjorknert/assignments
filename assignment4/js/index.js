
let allData = [];

async function fetchData() {
    const response = await fetch('data/house.json');
    return await response.json();
}

const header = document.getElementById('rubrik');
const h1 = document.createElement('h1');
h1.textContent = "SPÖKHUSBYRÅN AB";
h1.classList.add('huvudrubrik');
const h3 = document.createElement('h3');
h3.textContent = "HYR ETT HEMSÖKT HUS";
h3.classList.add('underrubrik');
header.append(h1, h3);

const container = document.getElementById('card');

//Rendera alla kort
export function renderCards(renderData) {
    container.innerHTML = "";

    if (renderData.length === 0) {
        container.innerHTML = "<p class='noResults'>Inga resultat matchar dina filterval</p>";
        return;
    }

    for (const d of renderData) {
        const div = document.createElement('div');
        div.classList.add('houseCards');

        let pEl = "";
        let scareStyle = "";
        let scareText = document.getElementById('scare-value');


        if (d.scareLevel === 1) {
            pEl = "MYSIGT";
            scareStyle = "mysigt";
            scareText.textContent = "Mysigt";
        } else if (d.scareLevel === 2) {
            pEl = "LITE LÄSKIGT";
            scareStyle = "lite";
            scareText.textContent = "Lite Läskigt";
        } else if (d.scareLevel === 3) {
            pEl = "OBEHAGLIGT";
            scareStyle = "obehagligt";
            scareText.textContent = "Obehagligt";
        } else if (d.scareLevel === 4) {
            pEl = "LÄSKIGT";
            scareStyle = "läskigt";
            scareText.textContent = "Läskigt";
        } else if (d.scareLevel === 5) {
            pEl = "REN TERROR";
            scareStyle = "mycket";
            scareText.textContent = "Ren Terror";
        }


        div.innerHTML = `
    <img class="bilder" src="./images/${d.image}" alt="${d.name}">
    <h3 class="name">${d.name.toUpperCase()}</h3>
    <p class="location">${d.location.toUpperCase()}</p>
    <div class="inline-items">
    <h4 class="price">${d.pricePerNight} KR/NATT</h4>
    <p class="scareLevel ${scareStyle}">${pEl}</p>
    </div>
    <p class="ghosttype">Spöken: ${d.ghostTypes.join(", ")}</p>
    <p class="wifi">${d.hasWifi ? "WiFi ingår" : "Inget WiFi"}</p>
    <button class="cardBtn" data-id="${d.id}">LÄS MER OCH BOKA</button>
    `;

        container.append(div);
    }

}

if (container) {
    container.addEventListener('click', (e) => {
        if (e.target.classList.contains("cardBtn")) {
            const id = e.target.dataset.id;

            window.location.href = `house.html?id=${id}`;
        }
    });
}

function applyFilters() {
    const filtered = allData.filter(d => {
        const filteredGhosts = document.querySelector('#ghost').value;
        const filteredPrice = Number(document.querySelector('#price').value);
        const filteredScareLevel = Number(document.querySelector('#scareLevel').value);
        const wifiChecked = document.querySelector('#wifi').checked;

        const matchesGhosts = !filteredGhosts || d.ghostTypes.includes(filteredGhosts);
        const matchesPrice = !filteredPrice || d.pricePerNight <= filteredPrice;
        const matchesScareLevel = !filteredScareLevel || d.scareLevel >= filteredScareLevel;
        const matchesWifi = !wifiChecked || d.hasWifi === true;


        return matchesGhosts && matchesPrice && matchesScareLevel && matchesWifi;

    });

    renderCards(filtered);
};

function useFilters() {
    document.querySelector('#ghost').addEventListener('change', applyFilters);
    document.querySelector('#price').addEventListener('input', applyFilters);
    document.querySelector('#scareLevel').addEventListener('input', applyFilters);
    document.querySelector('#wifi').addEventListener('change', applyFilters);
}


async function init() {
    try {
        allData = await fetchData();

        renderCards(allData);
        useFilters();

        console.log(allData);
    } catch (error) {
        console.error("Felet är: ", error);
        const errorEl = document.getElementById('error');
        errorEl.classList.add('error');
        errorEl.textContent = "Något gick fel";

    }
}

init();


