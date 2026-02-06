
import { renderNav } from "../nav.js";
import { assignments } from "../assignments.js";

const rubrik = document.getElementById('rubrik');
const container = document.getElementById('container');

const assignment = assignments.find(a => a.id === 'Uppgift 1');

const h3 = document.createElement('h3');
const h1 = document.createElement('h1');
const p = document.createElement('p');
const back = document.createElement('a');

h3.textContent = assignment.id;
h1.textContent = assignment.title;
p.textContent = assignment.description;

back.href = "../index.html";
back.textContent = 'Tillbaka till start';

container.append(p);
rubrik.append(h1, h3, back);

renderNav(1);