const menu = document.querySelector('#mobile-menu')
const menuLink = document.querySelector('.navbar-menu')

menu.addEventListener('click',function(){
    menuLink.classList.toggle('active')
    menu.classList.toggle('is-active')
    
}) 