
let allData = [];

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

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

        if (house.scareLevel === 1) {
            pEl = "Mysigt";
        } else if (house.scareLevel === 2) {
            pEl = "Lite läskig";
        } else if (house.scareLevel === 3) {
            pEl = "Obehagligt";
        } else if (house.scareLevel === 4) {
            pEl = "Läskigt";
        } else if (house.scareLevel === 5) {
            pEl = "Mycket läskigt";
        }

    container.innerHTML = `
    <img class="bilder" src="./images/${house.image}" alt="${house.name}">
    <h1>${house.name}</h1>
    <h4>${house.location}</h4>
    <p>Pris per natt: ${house.pricePerNight} kr</p>
    <p>Skräcknivå: ${pEl}</p>
    <p>${house.description}</p>
    <p>Latitud: ${house.coordinates.lat}</p>
    <p>Longitud: ${house.coordinates.lng}</p>
    <p>Spöken: ${house.ghostTypes.join(", ")}</p>
    <p>${house.hasWifi ? "WiFi tillgängligt" : "Inget WiFi tillgängligt"}</p>
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