const nav = document.querySelector('.nav')

const addShadow = () => {
    if (window.scrollY >= 300) {
        nav.classList.add('shadow-nav')
    } else {
        nav.classList.remove('shadow-nav')
    }
}

window.addEventListener('scroll', addShadow)











// test
const cardFront = document.querySelector('.front-card')
const cardBack = document.querySelector('.back-card')

const cardRotate = () => {
    if (cardFront.classList.contains('show')) {
        cardFront.classList.remove('show')
        cardFront.classList.add('hide')
        cardBack.classList.remove('hide')
        cardBack.classList.add('show')
    } else {
        cardFront.classList.remove('hide')
        cardFront.classList.add('show')
        cardBack.classList.remove('show')
        cardBack.classList.add('hide')
    }
}

cardFront.addEventListener('click', cardRotate)
cardBack.addEventListener('click', cardRotate)