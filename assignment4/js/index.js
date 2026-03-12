
async function fetchData() {
    const response = await fetch('data/house.json');
    let data = await response.json();
    console.log(data);
}
fetchData();


function renderCards() {
    const cards = document.createElement('div');
    cards.classList.add('houseCards');
    console.log(data);

    cards.innerHTML = `
    <img src="${data.image}" alt="${data.name}">
    <h2>${data.name}</h2>
    <h4>${data.location}</h4>
    <p>${data.coordinates}</p>
    <p>${data.description}</p>
    `;
    return cards;
}
