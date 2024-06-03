const menuBtns = document.querySelectorAll('.js-order-btn')
const menuEl = document.querySelector('.backdrop')

menuBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        menuEl.classList.toggle('is-open')
    })
})