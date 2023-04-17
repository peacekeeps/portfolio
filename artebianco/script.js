const headContainer = document.querySelector('.head-container')

const headContainerY = headContainer.getBoundingClientRect().height

const mainContainer = document.querySelector('.main-container')

const titleImg = document.querySelector('.title-img')

const txt = document.querySelector('#txt')

titleImg.addEventListener("error", function() {
    headContainer.innerHTML = `<h1>Arte Bianco</h1>`
})

function textAnimation() {
    txt.textContent 
}