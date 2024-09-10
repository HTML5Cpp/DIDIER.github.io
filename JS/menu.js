let btn = document.getElementById('menuMobile');
let items = document.querySelectorAll('.btn-mobile-item');

let menu = document.getElementById('navMobile');
let links = document.querySelectorAll('.navMobileItem');

items[1].classList.add('ocultar');

links.forEach(link => {
    link.addEventListener('click', muestreo);
});

btn.addEventListener('click', muestreo);

function muestreo() {
    menu.classList.toggle('ocu-nav');
    menu.classList.toggle('mos-nav');
    
    items[0].classList.toggle('mostrar');
    items[0].classList.toggle('ocultar');
    items[1].classList.toggle('mostrar');
    items[1].classList.toggle('ocultar');
}