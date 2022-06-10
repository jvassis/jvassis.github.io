const menu_mobile = document.getElementById('mobile-menu')

function toogleMenu() {
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
    menu_mobile.classList.toggle('active')
}

menu_mobile.addEventListener('click', toogleMenu)