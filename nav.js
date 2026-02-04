export const webPages = [
    {
        name: "Landingpage",
        path: "../index.html"
    },
    {
        name: "Uppgift 1",
        path: "../assignment1/index.html"
    }
];
console.log("lista med länkar");

export function renderNav(pages) {
    return pages.map(page => `<li><a href="${page.path}">${page.name}</a></li>`).join('');
}
console.log("Navigera sidor");

export function initNav() {
    const navEl = document.querySelector('.globalNav');
    navEl.innerHTML = renderNav(webPages);

    // Sätt active-klass på rätt navigationslänk
    const navLinks = navEl.querySelectorAll('a');
    const currentPage = window.location.pathname;

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        // Normalisera båda vägar för exakt matchning
        const normalizedHref = href.replace('../', '/').replace('./', '/');
        const normalizedPage = currentPage.replace(/\/$/, '') || '/';
        
        if (normalizedPage.endsWith(normalizedHref.replace(/\/$/, ''))) {
            link.classList.add('active');
        }
    });
}
