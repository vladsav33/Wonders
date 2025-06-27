document.querySelector('.menu').addEventListener('click', () => {
    document.querySelector('.nav-mobile-header').classList.toggle('nav-hidden');
});

const icon = document.getElementById('menuId');

icon.addEventListener('click', () => {
    if (icon.src.includes('assets/icons/menu.png')) {
        icon.src = 'assets/icons/menu_close.png';
    } else {
        icon.src = 'assets/icons/menu.png';
    }
});