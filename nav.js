import { assignments } from "./assignments.js";


export function renderNav(depth = 0) {
     const ul = document.querySelector('.globalNav');
    
     if (!ul) return;
   
    let level = "";
    if (depth > 0) {
        level = "../".repeat(depth);
    }

    const currentPath = location.pathname;
  
         ul.innerHTML = assignments.map(page => {
        // Jämför om sökvägen slutar med samma fil
        const href = level + page.link;
        const linkPath = new URL(href, location.href).pathname;
        const isActive = linkPath === currentPath;
        ul.classList.add('active');

        return `
        <li>
            <a href="${href}" class="${isActive ? 'active' : ''}">
            ${page.id}
            </a>
        </li>
        `;
    }).join('');
}
document.addEventListener('DOMContentLoaded', () => {
    renderNav(assignments, 0);
});

    





