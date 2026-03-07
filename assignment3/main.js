
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


/*------------ Uppgift 3 ----------------*/

const container = document.getElementById('matchContainer');
const btnPosition = document.getElementById('btnStatus');

const matchBtn = document.createElement('button');
matchBtn.classList.add('play-btn');
btnPosition.appendChild(matchBtn);

const resetBtn = document.createElement('button');
resetBtn.classList.add('reset-btn');
resetBtn.textContent = 'Börja om';
btnPosition.appendChild(resetBtn);

let allPlayers = [];
let nextPlayers = [];
let matchName = "";
let currentMatches = [];

function getMatchName(playersAmout) {
    if (playersAmout === 8) return "Kvartsfinal";
    if (playersAmout === 4) return "Semifinal";
    if (playersAmout === 2) return "Final";
}

//Skapar matchobjekt
function makeMatches(players) {
    const matches = [];
    
    for (let i = 0; i < players.length; i += 2) {
       const match = new Match(players[i], players[i + 1]);
       matches.push(match);
    }
    
    return matches;
}

matchBtn.addEventListener('click', () => {
        // start with full player list if we've emptied it
        if (nextPlayers.length === 0) {
            nextPlayers = allPlayers.slice();
        }

        // play the current round (sets matchName, nextPlayers)
        playMatch();

        // update button text for the following round (based on new nextPlayers)
        if (nextPlayers.length === 8) {
            matchBtn.textContent = 'Spela kvartsfinal';
        } else if (nextPlayers.length === 4) {
            matchBtn.textContent = 'Spela semifinal';
        } else if (nextPlayers.length === 2) {
            matchBtn.textContent = 'Spela final';
        } else if (nextPlayers.length <= 1) {
            matchBtn.disabled = true;
        }
});

//Renderar rundan
function renderCurrentMatch(matches, matchName) {
    const matchSection = document.createElement('section');
    matchSection.classList.add('matchSection');

    const h3 = document.createElement('h3');
    h3.textContent = matchName;
    matchSection.appendChild(h3);

    matches.forEach(m => {
        matchSection.appendChild(m.renderMatch());
    });
    container.appendChild(matchSection);
}

function playMatch() {
    //Nuvarande runda
    matchName = getMatchName(nextPlayers.length);
    currentMatches = makeMatches(nextPlayers);

    //Visa rundan
    renderCurrentMatch(currentMatches, matchName);

    //Spela rundan
     currentMatches.forEach(m => m.createRound());

     //Samla vinnarna
      const winners = currentMatches.map(w => w.winner);

      //Uppdatera till nästa runda
    nextPlayers = winners;
    }



resetBtn.addEventListener('click', () => {
    container.innerHTML = '';
    nextPlayers = allPlayers.slice();
    currentMatches = [];
    matchBtn.disabled = false;
    matchBtn.textContent = 'Spela kvartsfinal';
});

async function fetchData() {
    const response = await fetch('contestants.json');
    allPlayers = await response.json();

    if (allPlayers.length === 0) {
        return;
    }

    nextPlayers = allPlayers.slice();
    matchBtn.textContent = 'Spela kvartsfinal';
    //playMatch();
}
fetchData();



