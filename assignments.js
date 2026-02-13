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
    }
];
console.log("Lista");
renderNav(0);