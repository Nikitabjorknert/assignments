

const assOne = [
    {
        id: '1',
        title: 'Samlingssida för inlämningsuppgifter',
        description: 'Lära sig',
        showLink: true,
    }
];
console.log("Lista");

function assOneInfo(one) {
    const info = document.createElement('nav');
    info.classList.add('ass1');

    info.innerHTML = `
    <h1>Uppgift ${one.id} - ${one.title}</h1>
    <p>${one.description}</p>
    ${one.showLink ? `<a href="./${one.id}/" class="ass-link">Öppna uppgift</a> 
    ` : ''}
    `;
    return info;
}

const ass1 = assOneInfo('title');
document.querySelector('ul').append(ass1);

console.log("skapa lista");

function renderOneInfo(assOne) {
    const navOne = document.getElementById('navOne');
    if (!navOne) return;
    
    for (const one of assOne) {
        navOne.appendChild(assOneInfo(one));
    }
}
    renderOneInfo(assOne);


