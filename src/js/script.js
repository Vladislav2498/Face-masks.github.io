const btn = document.querySelector('.header__menu-button')

btn.addEventListener('click', () => {
    let img = document.querySelector('.header__menu-button img')
    if (document.querySelector(".header__navigation-button").classList.toggle("show")) {
        img.src = 'dist/img/menu-button.png'
    } else {
        img.src = 'dist/img/menu-button-lines.png'
    }
})