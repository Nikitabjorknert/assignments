
import { Match } from "./match.js"

import { assignments } from "../assignments.js";
import { renderNav } from "../nav.js";

const rubrik = document.getElementById('rubrik');
const assignment = assignments.find(assignments => assignments.id === 'Uppgift 3');
const h4 = document.createElement('h4');
const h2 = document.createElement('h2');
const h1 = document.createElement('h1');
const a = document.createElement('a');

h4.textContent = assignment.id;
h2.textContent = "Husdjur i en atletisk tävling";
h1.textContent = "HUSDJURSMÄSTERSKAPET";
a.href = "../index.html";
a.textContent = 'Tillbaka till start';

rubrik.append(h1, h2, h4, a);
renderNav(1);


/*------------ Uppgift 3 ----------------*/

const round1 = document.getElementById('round1'); 
const round2 = document.getElementById('round2'); 
const round3 = document.getElementById('round3'); 

const title1 = document.getElementById('title1');
const title2 = document.getElementById('title2');
const title3 = document.getElementById('title3');

const btnPosition = document.getElementById('btnStatus');

const matchBtn = document.createElement('button');
matchBtn.classList.add('play-btn');
matchBtn.textContent = 'Spela kvartsfinal';
btnPosition.appendChild(matchBtn);

const resetBtn = document.createElement('button');
resetBtn.classList.add('reset-btn');
resetBtn.textContent = 'Starta om';
btnPosition.appendChild(resetBtn);

let allPlayers = []; 
let nextPlayers = []; 
let currentMatches = []; 

const rounds = {
    Kvartsfinal: round1,
    Semifinal: round2,
    Final: round3
};
const titles = {
    Kvartsfinal: title1,
    Semifinal: title2,
    Final: title3
};

function getMatchName(playersAmout) { 
    if (playersAmout === 8) return 'Kvartsfinal'; 
    if (playersAmout === 4) return 'Semifinal'; 
    if (playersAmout === 2) return 'Final'; 
    console.log('funkar?', getMatchName); 
    return null; 
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



    function renderCurrentMatch(matches, matchName) { 
     
        const round = rounds[matchName];
        const title = titles[matchName];
        
         title.textContent = matchName;
        title.classList.remove('hidden');

        console.log('matchName:', matchName);
        console.log('round:', round); 
        
        //tar bara bort matcherna, inte titel 
        round.querySelectorAll('.match').forEach(match => match.remove()); 

        //lägg till matcher 
        matches.forEach(m => { 
            round.appendChild(m.renderMatch());
         }); 
        //visa runda 
        round.classList.remove('hidden'); 
       
    } 

    function prepareRound(players) { 
       const matchName = getMatchName(players.length);

      console.log("players:", players);
    console.log("players.length:", players.length);
     console.log("matchName:", matchName);

    currentMatches = makeMatches(players);
    renderCurrentMatch(currentMatches, matchName);
}
    
    function playMatch() { 
     
     //Spela rundan
     currentMatches.forEach(m => m.compete());

       //Samla vinnarna
      const winners = currentMatches.map(m => m.winner);

    if (winners.length === 1) {
        matchBtn.disabled = true;
        return;
    }
        //Uppdatera till nästa runda 
        nextPlayers = winners; 
        prepareRound(nextPlayers); 
        // update button text for the following round (based on new nextPlayers) 
        if (nextPlayers.length === 4) { 
            matchBtn.textContent = 'Spela semifinal'; 
        } else if (nextPlayers.length === 2) { 
            matchBtn.textContent = 'Spela final'; 
        } 
    } 


    function resetMatches() { 
        [round1, round2, round3].forEach(round => {
            round.querySelectorAll('.match').forEach(match => match.remove());
        });
       
        round2.classList.add('hidden'); 
        round3.classList.add('hidden'); 
        
        title2.classList.add('hidden');
title3.classList.add('hidden');

        nextPlayers = allPlayers.slice(); 
        currentMatches = []; 

        prepareRound(nextPlayers);

        matchBtn.disabled = false; 
        matchBtn.textContent = "Spela kvartsfinal"; 
    } 
    
    matchBtn.addEventListener('click', playMatch); 
    resetBtn.addEventListener('click', resetMatches); 
    
    async function fetchData() { 
        const response = await fetch('contestants.json'); allPlayers = await response.json();

         if (allPlayers.length !== 8) { 
            return; 
        } 

        nextPlayers = allPlayers.slice(); 
        
        prepareRound(nextPlayers); 
        
        matchBtn.textContent = 'Spela kvartsfinal'; 
        matchBtn.disabled = false; 

        round2.classList.add('hidden'); 
        round3.classList.add('hidden'); 
    } 
        fetchData();

/*-
function getSection(matchName) {
    if (matchName === "Kvartsfinal") return round1;
    if (matchName === "Semifinal") return round2;
    if (matchName === "Final") return round3;

    console.log('funkar?', matchName);
    return null;
} 


function getTitle(matchName) {
    if (matchName === "Kvartsfinal") return title1;
    if (matchName === "Semifinal") return title2;
    if (matchName === "Final") return title3;

    return null;
} -*/



   






/*-
    round1.querySelectorAll('.match').forEach(match => match.remove());
    round2.querySelectorAll('.match').forEach(match => match.remove());
    round3.querySelectorAll('.match').forEach(match => match.remove()); -*/

   




