
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

    for (const d of renderData) {
        const div = document.createElement('div');
        div.classList.add('houseCards');

        let pEl = "";
        let scareStyle = "";

        if (d.scareLevel === 1) {
            pEl = "MYSIGT";
            scareStyle = "mysigt";
        } else if (d.scareLevel === 2) {
            pEl = "LITE LÄSKIGT";
              scareStyle = "lite";
        } else if (d.scareLevel === 3) {
            pEl = "OBEHAGLIGT";
              scareStyle = "obehagligt";
        } else if (d.scareLevel === 4) {
            pEl = "LÄSKIGT";
              scareStyle = "läskigt";
        } else if (d.scareLevel === 5) {
            pEl = "REN TERROR";
              scareStyle = "mycket";
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


