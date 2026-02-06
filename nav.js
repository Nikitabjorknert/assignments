import { assignments } from "./assignments.js";


export function renderNav(assignments) {
    
    const ul = document.querySelector('.globalNav');
    if (!ul) return;
   
    const currentPath = location.pathname;
  
    ul.innerHTML = assignments.map(page => {
        // Jämför om sökvägen slutar med samma fil
        const link = new URL(page.path, location.href).pathname;
        const isActive = link === currentPath;

        return `
        <li>
            <a href="${page.link}" class="${isActive ? 'active' : ''}">
            ${page.id}
            </a>
        </li>
        `;
    }).join('');
}
document.addEventListener('DOMContentLoaded', () => {
    renderNav(0);
});

    





