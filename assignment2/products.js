export const products = [
    {
        id: 1,
        name: 'Soffa',
        description: 'Denna soffa...',
        price: 14900,
        image: 'img/soffa.jpg',
        category: ['Soffor', 'Sittmöbler', 'Vardagsrum']
    },
    {
        id: 2,
        name: 'Matbord',
        description: 'Denna är...',
        price: 2500,
        image: 'img/matbord.jpg',
        category: ['Kök', 'Bord', 'Matsal']
    },
    {
        id: 3,
        name: 'Lampor',
        description: 'Denna är...',
        price: 800,
        image: 'img/lampa.jpg',
        category: ['Dekoration', 'Belysning', 'Bordslampa', 'Armaturer']
    },
    {
        id: 4,
        name: 'Fåtöljer',
        description: 'Denna är...',
        price: 1800,
        image: 'img/fåtölj.jpg',
        category: ['Sittmöbler', 'Fåtöljer']
    },
    {
        id: 5,
        name: 'Garderober',
        description: 'Denna är...',
        price: 4800,
        image: 'img/garderob.jpg',
        category: ['Klädförvaring', 'Förvaring', 'Sovrum']
    },
    {
        id: 6,
        name: 'TV-bänkar',
        description: 'Denna är...',
        price: 2000,
        image: 'img/tvbänk.jpg',
        category: ['Vardagsrum', 'Bänkar', 'TV-bänkar']
    },
    {
        id: 7,
        name: 'Matstolar',
        description: 'Denna är...',
        price: 600,
        image: 'img/matstol.jpg',
        category: ['Matsal', 'Stolar', 'Kök']
    },
    {
        id: 8,
        name: 'Kontorsstolar',
        description: 'Denna är...',
        price: 1000,
        image: 'img/kontorsstol.jpg',
        category: ['Kontor', 'Stolar', 'Kontorsmöbler']
    }
];
console.log('Produktlista: ', products);

for (const id in products) {
    console.log(id, products[id]);
}
