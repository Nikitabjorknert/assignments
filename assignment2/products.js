export const products = [
    {
        id: 1,
        name: 'Soffa Midnight',
        description: 'Soffa med mjuk, organisk form. Stomme i massiv ek och yttertyg i fårskinnsimitation av polyester. En lös kudde medföljer. 180x110x60cm.',
        material: '95% Polyester, 5% Bomull',
        price: 4900,
        image: 'img/soffa.jpg',
        category: ['Soffor', 'Sittmöbler', 'Vardagsrum', 'Svart'],
        add: 'Köp'
    },
    {
        id: 2,
        name: 'Matbord Jolina',
        description: 'Runt matbord i MDF med PU-belagd, högblank finish. Bordsben är kub-format. Högglansiga ytor är mer mottagliga för repor än matta ytor, se därför till att använda glasunderlägg för skydd. Matbordet torkas av med mjuk trasa. 120x120x75cm, med 4 sittplatser.',
        material: 'MDF',
        price: 2500,
        image: 'img/matbord.jpg',
        category: ['Runda Bord', 'Bord', 'Matbord', 'Matsal'],
         add: 'Köp'
    },
    {
        id: 3,
        name: 'Lampa Ellie',
        description: 'Ellie har en industriell och minimalistisk design med material av svart metall och marmorimitation. Designen är utformad för att kunna passa din personliga smak. Glödlampa medföljer ej. Storlek och form på glödlampa kan väljas fritt, beroende på preferens. Sockel: E27.',
        material: 'Metall',
        price: 800,
        image: 'img/lampa.jpg',
        category: ['Dekoration', 'Belysning', 'Bordslampa', 'Armaturer'],
         add: 'Köp'
    },
    {
        id: 4,
        name: 'Fåtölj Teddy',
        description: 'Fåtölj med klädsel i bouclé. Tyget är enkelt att rengöra och hålla snyggt. Använd ett mjukt dammsugarmunstycke, en självhäftande roller eller en klädborste. Viktigt är däremot att att borsta och dammsuga i luggens riktning för att behålla kvalitet. Märken och fläckar tas bort med ånga från ångstrykjärn eller en steamer.',
        material: '85% Polyester, 15% Akryl',
        price: 1800,
        image: 'img/fåtölj.jpg',
        category: ['Sittmöbler', 'Fåtöljer', 'Vit', 'Vardagsrum'],
         add: 'Köp'
    },
    {
        id: 5,
        name: 'Garderob Betty',
        description: 'Garderob med generös plats för avhängning och förvaring. Denna tvådörrsgarderob har ett hyllplan och en generös hängdel som standard. Det ingår dessutom tre hyllplan som går att placera efter eget tycke. Garderoberna säljs styckvis. 210x110x55cm.',
        material: 'Slipad furu, pressat hdf-material.',
        price: 4800,
        image: 'img/garderob.jpg',
        category: ['Klädförvaring', 'Förvaring', 'Sovrum', 'Garderober'],
         add: 'Köp'
    },
    {
        id: 6,
        name: 'TV-bänk Mindy',
        description: 'Denna är...',
        material: '95% Polyester, 5% Bomull',
        price: 2000,
        image: 'img/tvbänk.jpg',
        category: ['Vardagsrum', 'Bänkar', 'TV-bänkar', 'Förvaring'],
         add: 'Köp'
    },
    {
        id: 7,
        name: 'Matstol Ylva',
        description: 'Matstol med klassisk design och tidlöst formspråk. Stolen har en Y-formad rygg och passar sig bra till många hem. En mycket populär produkt som är tillverkad med stomme, ryggstöd och ben av massiv ek. Sitsen är av flätat rep vilket ger en unik touch på stolen. Stolen köps styckvis.',
        material: 'Massiv ek',
        price: 600,
        image: 'img/matstol.jpg',
        category: ['Matsal', 'Stolar', 'Kök', 'Svart'],
         add: 'Köp'
    },
    {
        id: 8,
        name: 'Kontorsstol Office',
        description: 'Denna är...',
        material: '95% Polyester, 5% Bomull',
        price: 1000,
        image: 'img/kontorsstol.jpg',
        category: ['Kontor', 'Stolar', 'Kontorsmöbler', 'Skrivbordsstolar'],
         add: 'Köp'
    }
];
console.log('Produktlista: ', products);

for (const id in products) {
    console.log(id, products[id]);
}
