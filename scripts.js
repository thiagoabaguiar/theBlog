const menu = document.querySelector('.menu')
const menuToggle = document.querySelector('.menu-toggle')
const body = document.querySelector('body')
let show = true


menuToggle.addEventListener('click', () => {

    menu.classList.toggle('full-screen', show)
    menu.style.visibility = 'visible'
    
    menuToggle.style.zIndex = '20'

    body.style.overflow = show ? 'hidden' : 'initial'

    let one = document.querySelector('.one')
    let two = document.querySelector('.two')
    let three = document.querySelector('.three')

    one.classList.toggle('show-x')
    two.classList.toggle('show-x')
    three.classList.toggle('show-x')

    show = !show

})