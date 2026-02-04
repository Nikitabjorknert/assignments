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

function createCard(ass) {
    const div = document.createElement('div');
    div.classList.add('card');

    div.innerHTML = `
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
    return div;
}

const card = createCard('Titel', 'Beskrivning');
document.querySelector('main').append(card);

console.log("skapa lista");

function renderCards(assignments) {
    const container = document.getElementById('container');

    container.innerHTML = '';
    for (const ass of assignments) {
        container.appendChild(createCard(ass));
    }
}
    renderCards(assignments);

