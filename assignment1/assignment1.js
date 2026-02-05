

/*const assOne = [
    {
        id: '1',
        title: 'Samlingssida för inlämningsuppgifter',
        description: 'Lära sig',
        showLink: true,
    }
];
console.log("Lista");

function assOneInfo(one) {
    const info = document.createElement('div');
    info.classList.add('ass1');

    info.innerHTML = `
    <h1>Uppgift ${one.id} - ${one.title}</h1>
    <p>${one.description}</p>
    ${one.showLink ? `<a href="./${one.id}/" class="ass-link">Öppna uppgift</a> 
    ` : ''}
    `;
    return info;
}

//const ass1 = assOneInfo('title');
//document.querySelector('div').append(ass1);

console.log("skapa lista");

function renderOneInfo(assOne) {
    const navOne = document.getElementById('navOne');
    if (!navOne) return;
    
    for (const one of assOne) {
        navOne.appendChild(assOneInfo(one));
    }
}
    renderOneInfo(assOne); */

import { assignments } from "../assignments.js";

const container = document.getElementById('container');
const assignment = assignments.find(assignments => assignments.id === 'Uppgift 1');
const h3 = document.createElement('h3');
const h1 = document.createElement('h1');
const p = document.createElement('p');
const a = document.createElement('a');

h3.textContent = assignment.id;
h1.textContent = assignment.title;
p.textContent = assignment.description;
a.href = "../index.html";
a.textContent = 'Tillbaka till start';

container.append(h1, h3, p, a);
