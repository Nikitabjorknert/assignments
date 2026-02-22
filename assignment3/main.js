fetch("contestants.json")
    .then(response => response.json())
    .then(contestants => {
        console.log(contestants);
        console.log(contestants[0].id);
    });

import { match1 } from "./match.js";
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