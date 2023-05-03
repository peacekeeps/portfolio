const myMenu = document.getElementById("menu")
const menuIcon = document.getElementById("menu_icon")

document.onclick = function(e) {
    if (e.target.id !== 'menu' && e.target.id !== 'menu_icon') {
        myMenu.classList.remove('active')
        menuIcon.innerHTML = "menu"
    }
}

menuIcon.onclick = function() {
    myMenu.classList.toggle('active')

    if (menuIcon.innerHTML == "menu_open") {
        menuIcon.innerHTML = "menu"
    } else {
        menuIcon.innerHTML = "menu_open"
    }
}
