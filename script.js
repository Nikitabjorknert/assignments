import { initNav } from "../nav.js";

document.addEventListener('DOMContentLoaded', () => {
    initNav();
});

const assignments = [
    {
        id: '1a',
        title: 'Hello',
        description: 'Lära sig',
        week: 1,
        completed: true,
        showLink: true,
        difficulty: 'easy',
        topics: ['Metoder', 'export', 'import']
    },
    {
        id: '1b',
        title: 'Hello2',
        description: 'Lära sig att',
        week: 1,
        completed: false,
        showLink: false,
        difficulty: 'hard',
        topics: ['git', 'versionshantering']
    }
];
console.log("Lista");

function createAssCard(ass) {
    const card = document.createElement('div');
    card.classList.add('ass-card');

    card.innerHTML = `
    <h3>Uppgift ${ass.id} - ${ass.title}</h3>
    <p>${ass.description}</p>
    <p>${ass.topics}</p>
    <div class="ass-meta">
        <span class="status ${ass.completed ? 'completed' : ''}"></span>
        <span class="week">Vecka ${ass.week}</span>
    </div>
    ${ass.showLink ? `<a href="./${ass.id}/" class="ass-link">Öppna uppgift</a> 
    ` : ''}
    `;
    return card;
}
console.log("skapa lista");

function renderAss(assignments) {
    const container = document.getElementById('container');
    
    if (!container) return; // Sluta här om container inte finns

    container.innerHTML = '';
    for (const assignment of assignments) {
        const card = createAssCard(assignment);
        container.appendChild(card);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderAss(assignments);
});

