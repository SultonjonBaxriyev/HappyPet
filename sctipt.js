const button = document.querySelector('.button')
window.addEventListener('scroll', ()=> {
    if(window.scrollY>100) {
        button.classList.add('show')
    } else {
        button.classList.remove('show')
    }
})