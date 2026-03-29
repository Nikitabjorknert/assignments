import { renderNav } from "./nav.js";

export const assignments = [
    {
        id: 'Uppgift 1',
        title: 'Samlingssida för inlämningsuppgifter',
        description: 'Uppgift 1 handlar om att skapa en dynamisk landningssida för alla uppgifter. Varje sida/uppgift är stilsatta på olika sätt för att lättare skilja mellan dem. Sidan är byggd med JavaScript, css och HTML.',
        link: "assignment1/index.html",
    },
    {
        id: 'Uppgift 2',
        title: 'Produktsida med kundvagn',
        description: 'I Uppgift 2 skulle vi utföra en produktsida/shop med information om produkterna, funktion att kunna lägga till produkterna i varukorgen, samt att varukorgens innehåll summerar ett totalpris samt antal av varje produkt.',
        link: "assignment2/index.html",
    },
      {
        id: 'Uppgift 3',
        title: 'Turneringsgeneratorn',
        description: 'I uppgift 3 byggdes turneringen "Husdjursmästerskapet" där husdjuren tävlar mot varandra i kvarts-, semi- och final.',
        link: "assignment3/index.html",
    },
    {
        id: 'Uppgift 4 - Slutuppgift',
        title: 'Spökhusbyrån AB',
        description: 'Spökhusbyrån är ett företag som hyr ut spökhus. I denna uppgiften byggde jag en webbplats åt företaget där användaren kan se översikt över alla hus, kan filtrera mellan dem, gå in på en detaljsida av huset, se platsen på en karta, fylla i formulär och boka.',
        link: "assignment4/index.html",
    }
];
console.log("Lista");
renderNav(0);