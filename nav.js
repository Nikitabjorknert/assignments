export const webPages = [
    {
        name: "Startsida",
        path: "../index.html"
    },
    {
        name: "Uppgift 1",
        path: "../assignment1/index.html"
    },
    {
        name: "Uppgift 2",
        path: "../assignment2/index.html"
    }
];

export function renderNav() {
    const ul = document.querySelector('.globalNav');
    if (!ul) return;
   
    const currentPath = location.pathname;
    
    ul.innerHTML = webPages.map(page => {
        // Jämför om sökvägen slutar med samma fil
        const link = new URL(page.path, location.href).pathname;
        const isActive = link === currentPath;
        return `<li><a href="${page.path}" class="${isActive ? 'active' : ''}">${page.name}</a></li>`;
    }).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    renderNav();
});

    





