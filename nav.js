
const ass = document.querySelector('.globalNav');

document.querySelectorAll(".globalNav a.link").forEach(a => {
    if (a.href === location.href) {
        a.classList.add('active');
    }
});





