const navList = {
name: ["Startsida", "Uppgift 1", "Uppgift 2", "Uppgift 3"]
};

const globalNav = document.getElementById('globalNav');

document.querySelectorAll(".globalNav a.link").forEach(a => {
    if (a.href === location.href) {
        a.classList.add('active');
    }
});




