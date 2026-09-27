const menu = document.querySelector('#mobile-menu')
const menuLink = document.querySelector('.navbar-menu')

menu.addEventListener('click',function(){
    menuLink.classList.toggle('active')
    menu.classList.toggle('is-active')
    
}) 

document.getElementById("openBtn").onclick = function () {
  document.getElementById("overlay").classList.add("show");
  menuLink.classList.remove('active')
};

document.getElementById("closeBtn").onclick = function () {
  document.getElementById("overlay").classList.remove("show");
  menu.classList.remove('is-active')
};