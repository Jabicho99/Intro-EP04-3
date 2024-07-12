document.addEventListener('DOMContentLoaded', () => {
    const appetizers = [
        { name: 'Sopa', img: 'imagen1.jpg' },
        { name: 'Causa', img: 'imagen2.jpg' },
        { name: 'Ceviche', img: 'imagen3.jpg' },
        { name: 'Rocoto Relleno', img: 'imagen4.jpg' },
        { name: 'Tamales', img: 'imagen5.jpg' }
    ];

    const mainDishes = [
        { name: 'Estofado', img: 'imagen6.jpg' },
        { name: 'Chaufa', img: 'imagen7.jpg' },
        { name: 'Arroz con Pollo', img: 'imagen8.jpg' },
        { name: 'Cuy', img: 'imagen9.jpg' },
        { name: 'Pollo a la Brasa', img: 'imagen10.jpg' },
    ];

    function displayMenu(items, sectionId) {
        const section = document.getElementById(sectionId);
        items.forEach(item => {
            const menuItem = document.createElement('div');
            menuItem.className = 'menu-item';
            menuItem.innerHTML = `
                <img src="${item.img}" alt="${item.name}">
                <p>${item.name}</p>
            `;
            section.appendChild(menuItem);
        });
    }

    displayMenu(appetizers, 'appetizers');
    displayMenu(mainDishes, 'main-dishes');
});
