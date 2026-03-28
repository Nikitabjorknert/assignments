
let allData = [];

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const header = document.getElementById('rubrik');
const h1 = document.createElement('h1');
h1.textContent = "SPÖKHUSBYRÅN AB";
h1.classList.add('huvudrubrik');
const h3 = document.createElement('h3');
h3.textContent = "HYR ETT HEMSÖKT HUS";
h3.classList.add('underrubrik');

const goBack = document.createElement('p');
goBack.textContent = "← Tillbaka till översikt";
goBack.href = "../index.html";
goBack.classList.add('goBack');
header.append(h1, h3, goBack);

async function fetchData() {
     const response = await fetch('data/house.json');
    const data = await response.json();

    const message = document.createElement('p');
    const link = document.createElement('a');

   const findHouse = data.find(d => d.id == id);
   if (findHouse === undefined) {
    message.textContent = "Hus ej hittad";
    message.classList.add('houseNotFound');
    link.href = "../index.html";
    link.textContent = "Tillbaka till översikt";
   } else {
    return findHouse;
   }
}

console.log(id);

function viewHouse(house) {

const container = document.getElementById('house');

        let pEl = "";
          let scareStyle = "";

        if (house.scareLevel === 1) {
            pEl = "Mysigt";
             scareStyle = "mysigt";
        } else if (house.scareLevel === 2) {
            pEl = "Lite läskig";
             scareStyle = "lite";
        } else if (house.scareLevel === 3) {
            pEl = "Obehagligt";
             scareStyle = "obehangligt";
        } else if (house.scareLevel === 4) {
            pEl = "Läskigt";
             scareStyle = "läskigt";
        } else if (house.scareLevel === 5) {
            pEl = "REN TERROR";
             scareStyle = "mycket";
        }

    container.innerHTML = `
    <img class="bilder" src="./images/${house.image}" alt="${house.name}">
    <h2 class="housename">${house.name.toUpperCase()}</h2>
    <h4 class="place">${house.location.toUpperCase()}</h4>
    <p>${house.description}</p>
    <div class="inline-items">
    <p class="price">${house.pricePerNight} KR/NATT</p>
    <p class="scareLevel ${scareStyle}">${pEl.toUpperCase()}</p>
    </div>
    <p>Latitud: ${house.coordinates.lat}</p>
    <p>Longitud: ${house.coordinates.lng}</p>
    <p>Spöken: ${house.ghostTypes.join(", ")}</p>
    <p>${house.hasWifi ? "WiFi ingår" : "Inget WiFi"}</p>
    `;
}

async function init() {
     try {
        const house = await fetchData();
        console.log(allData);
        viewHouse(house);
    } catch (error) {
        console.error("Felet är: ", error);
        const errorEl = document.getElementById('error');
        errorEl.classList.add('error');
        errorEl.textContent = "Något gick fel";
    }
}

init();