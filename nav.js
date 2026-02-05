import { assignments } from "../assignments.js";


export function renderNav(level = 0) {
    
    const ul = document.querySelector('.globalNav');
    if (!ul) return;
   
    const currentPath = location.pathname;
    const levels =  "../".repeat(level);

    ul.innerHTML = assignments.map(page => {
        // Jämför om sökvägen slutar med samma fil
        const href = levels + page.link;
        const link = new URL(href, location.href).pathname;
        const isActive = link === currentPath;

        return `
        <li>
            <a href="${href}" class="${isActive ? 'active' : ''}">
            ${page.id}</a></li>
        `;
    }).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    renderNav(0);
});

    





