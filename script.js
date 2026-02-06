import { assignments } from "./assignments.js";
import { renderNav } from "./nav.js";

function createCard(ass) {
    const div = document.createElement('div');
    div.classList.add('card');

    div.innerHTML = `
    <h3> ${ass.id} - ${ass.title}</h3>
    <p>${ass.description}</p>
    ${ass.link ? `<a href="${ass.link}" class="ass-link">Öppna uppgift</a> 
    ` : ''}
    `;
    return div;
}

const card = createCard('Titel', 'Beskrivning');
document.querySelector('main').append(card);

console.log("skapa lista");

export function renderCards(assignments) {
    const container = document.getElementById('container');
    if (!container) return;
    
    for (const ass of assignments) {
        container.appendChild(createCard(ass));
    }
}
    renderCards(assignments);
    renderNav(0);

