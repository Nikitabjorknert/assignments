const assignments = [
    {
        id: '1',
        title: 'Samlingssida för inlämningsuppgifter',
        description: 'Lära sig',
        completed: true,
        showLink: true,
    },
    {
        id: '2',
        title: 'Hello2',
        description: 'Lära sig att',
        completed: false,
        showLink: true,
    }
];
console.log("Lista");

function createCard(ass) {
    const div = document.createElement('div');
    div.classList.add('card');

    div.innerHTML = `
    <h3>Uppgift ${ass.id} - ${ass.title}</h3>
    <p>${ass.description}</p>
    <div class="ass-meta">
        <span class="status ${ass.completed ? 'completed' : ''}"></span>
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

