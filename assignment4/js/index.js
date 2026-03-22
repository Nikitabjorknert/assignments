
let allData = [];

async function fetchData() {
     const response = await fetch('data/house.json');
    return await response.json();
}

const header = document.getElementById('rubrik');
if (header) {
const h1 = document.createElement('h1');
h1.textContent = "Spökhusbyrån";
header.append(h1);
}

const container = document.getElementById('card');

//Rendera alla kort
export function renderCards(renderData) {
    container.innerHTML = "";

    for (const d of renderData) {
        const div = document.createElement('div');
        div.classList.add('houseCards');

        let pEl = "";

        if (d.scareLevel === 1) {
            pEl = "Mysigt";
        } else if (d.scareLevel === 2) {
            pEl = "Lite läskig";
        } else if (d.scareLevel === 3) {
            pEl = "Obehagligt";
        } else if (d.scareLevel === 4) {
            pEl = "Läskigt";
        } else if (d.scareLevel === 5) {
            pEl = "Mycket läskigt";
        }

        div.innerHTML = `
    <img class="bilder" src="./images/${d.image}" alt="${d.name}">
    <h2>${d.name}</h2>
    <h4>${d.location}</h4>
    <p>Pris per natt: ${d.pricePerNight} kr</p>
    <p>${pEl}</p>
    <button class="cardBtn" data-id="${d.id}">Läs mer och boka</button>
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
//Filtrera alla pris per natt
function filterPrice() {
    const priceInput = document.querySelector('#price');

    priceInput.addEventListener('input', () => {
        const pValue = Number(priceInput.value);

        if (!pValue) {
            renderCards(allData);
            return;
        }
        const filtered = allData.filter(d => d.pricePerNight <= pValue);

        renderCards(filtered);
        console.log(filtered);
    });
}

    //Filtrerar skräcknivån
    function filterScareLevel() {
        const scareSlider = document.querySelector('#scareLevel');
        const scareValue = document.querySelector('#scare-value');
    
    scareSlider.addEventListener('input', () => {
        const sLevelValue = Number(scareSlider.value);
        scareValue.textContent = sLevelValue;

        if (sLevelValue === 0) {
            renderCards(allData);
            return;
        }
            const filtered = allData.filter(d => d.scareLevel >= sLevelValue);
            console.log(filtered);
        
        renderCards(filtered);
    });
}

//Filtrerar spöken
function filterGhosts() {

    const ghostDropdown = document.querySelector('#ghost');

    ghostDropdown.addEventListener('change', () => {
        //Array-filter
        const selected = ghostDropdown.value;
        

        const filtered = allData.filter(d => {
            return selected === "allatyper" || d.ghostTypes.includes(selected);
    });
    renderCards(filtered);
       console.log(filtered);
});
}

function filterWifi() {
    const wifiCheckbox = document.querySelector('#wifi');

    wifiCheckbox.addEventListener('change', () => {
        if (wifiCheckbox.checked) {
            const filtered = allData.filter(d => d.hasWifi === true);
            renderCards(filtered);
            console.log(filtered);
        } else {
            renderCards(allData);
        }
    });
}

async function init() {
     try {
        allData = await fetchData();

        renderCards(allData);
        filterPrice();
        filterScareLevel();
        filterGhosts();
        filterWifi();
       
        console.log(allData);
    } catch (error) {
         console.error("Felet är: ", error);
        const errorEl = document.getElementById('error');
        errorEl.classList.add('error');
        errorEl.textContent = "Något gick fel";
        
    }
}

init();


