import { assignments } from "../assignments.js";
import { renderNav } from "../nav.js";

const rubrik = document.getElementById('rubrik');
const container = document.getElementById('container');
const assignment = assignments.find(assignments => assignments.id === 'Uppgift 2');
const h3 = document.createElement('h3');
const h1 = document.createElement('h1');
const p = document.createElement('p');
const a = document.createElement('a');

h3.textContent = assignment.id;
h1.textContent = assignment.title;
p.textContent = assignment.description;
a.href = "../index.html";
a.textContent = 'Tillbaka till start';

container.append(p);
rubrik.append(h1, h3, a);
renderNav(1);