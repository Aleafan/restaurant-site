const antipasti = {
    name: 'ANTIPASTI',
    items: [
        'fritto misto of squid, prawns & anchovies, curry mayonnaise',
        'duo of quail, golden beetroot puree, mushroom & thyme salad',
        'deep fried egg, leek & scamorza mousse, tapenade, fresh oregano',
        'sea bass crudo, avocado & samphire salad, passion fruit, basil, popcorn'
    ],
    prices: [11, 11, 9, 13]
};
const pasta = {
    name: 'PASTA',
    items: [
        'garganelli romagnoli, lamb ragout, green beans, salva cremasco cheese, grapefruit zest',
        'spaghetti quadrati alla carbonara, guanciale, parmigiano reggiano 36 months, pecorino, eggs',
        'linguine aglio, olio, peperoncino with lobster, avocado, cardamom oil',
        'smoked gnocchi cacio e pepe, wild mushrooms, beetroot chips'
    ],
    prices: [17, 16, 19, 16]
}
const mains = {
    name: 'MAINS',
    items: [
        'sea bream fillet, grilled lettuce, carrot cream, black olives, pico de gallo',
        'hanger steak tagliata, grilled asparagus, baby potatoes, wasabi zabaione',
        'grilled octopus, puré & pickled courgette, wheat salad, mint',
        'duck breast, red fruits, seed granola, goat’s cheese cream, maitake mushrooms',
    ],
    prices: [19, 20, 21, 19]
}
const drinks = {
    name: 'DRINKS',
    items: [
        'Lunardi, Sauvignon Blanc - white wine',
        'Timo, Vermentino - white wine',
        'Lunardi, Cabernet Sauvignon - red wine',
        'Montepulciano D\'Abruzzo, Montepulciano - red wine',
        'Teresa Rizzi, Glera - prosecco',
        'Glass of water'
    ],
    prices: [17, 20, 21, 19, 20, 50]
}

export const loadMenu = () => {
    const main = document.createElement('main');
    main.setAttribute('id', 'menu');

    const h2 = document.createElement('h2');
    h2.textContent = 'MENU';
    main.appendChild(h2);

    const image = document.createElement('img');
    image.setAttribute('src', '../src/food-w800.jpg');
    image.setAttribute('alt', 'Food and wine served in a restaurant');
    main.appendChild(image);

    const menu = [antipasti, pasta, mains, drinks];

    menu.forEach(category => {
        const section = document.createElement('section');

        const h3 = document.createElement('h3');
        h3.textContent = category.name;
        section.appendChild(h3);

        category.items.forEach((item, index) => {
            const article = document.createElement('article');
            article.classList.add('menu-item');

            const p1 = document.createElement('p');
            p1.textContent = item;
            article.appendChild(p1);

            const p2 = document.createElement('p');
            p2.textContent = `€${category.prices[index]}`;
            article.appendChild(p2);

            section.appendChild(article);
        });

        main.appendChild(section);
    });

    // const mainOld = document.querySelector('main');
    const content = document.getElementById('content');
    const footer = document.querySelector('footer');
    // content.removeChild(mainOld);
    content.insertBefore(main, footer);
}