
import { Match } from "./match.js"

import { assignments } from "../assignments.js";
import { renderNav } from "../nav.js";

const rubrik = document.getElementById('rubrik');
const assignment = assignments.find(assignments => assignments.id === 'Uppgift 3');
const h3 = document.createElement('h3');
const h1 = document.createElement('h1');
const a = document.createElement('a');

h3.textContent = assignment.id;
h1.textContent = assignment.title;
a.href = "../index.html";
a.textContent = 'Tillbaka till start';

rubrik.append(h1, h3, a);
renderNav(1);


//Uppgift 3

async function fetchData() {
    const response = await fetch('contestants.json');
    const players = await response.json();

    const match1 = document.getElementById('match1');
    match1.innerHTML = ''; // Rensa tidigare innehåll

    const matches = [];

    const btn1 = document.createElement('button');
    btn1.classList.add('play-btn');
    btn1.textContent = 'Spela kvartsfinal';

    btn1.addEventListener('click', () => {
        matches.forEach(match => match.play());
        console.log(btn1, "Knappen fungerar");
    });
   
    match1.appendChild(btn1);

    for (let i = 0; i < players.length; i += 2) {

        const match = new Match(players[i], players[i + 1]);

        matches.push(match);
        match1.appendChild(match.renderMatch());
    }

    console.log(matches);
    
}
fetchData();



/*
function renderMatches(players) {
    const container = document.querySelector('main');

    const matches = [];

    for (let i = 0; i < players.length; i += 2) {
        //const player1 = players[i];
        //const player2 = players[i + 1];
       
     //const match = new Match(player1, player2);
        
     matches.push(new Match(players[i], players[i + 1]));
    }

    return matches;
}
 container.appendChild(renderMatches(players));

async function init() {
    const response = await fetch('contestants.json');
    const players = await response.json(); 

    const container = document.getElementById('container');
    container.innerHTML = ''; // Rensa tidigare innehåll

    const matches = renderMatches(players);

    matches.forEach(match => {
        container.appendChild(match.renderMatch());
    });
}
init(); */




