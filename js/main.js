const nav = document.querySelector('.nav')

const addShadow = () => {
    if (window.scrollY >= 300) {
        nav.classList.add('shadow-nav')
    } else {
        nav.classList.remove('shadow-nav')
    }
}

console.log(nav.offsetTop);

window.addEventListener('scroll', addShadow)