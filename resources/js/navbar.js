import '../css/navbar.css'
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');


burger.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden')
        menu.classList.add('show')
    } else {
        menu.classList.remove('show')
        menu.classList.add('hidden')
    }
})