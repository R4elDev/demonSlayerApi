"use strict"

const imgClick = document.getElementById('imgClick')


function abrirMenu(){
    const menuBurguer = document.getElementById('menuBurguer')
    if(menuBurguer.style.visibility == "hidden"){
        menuBurguer.style.visibility = "visible"
        imgClick.src = "./img/xAoClique.png"
    }else{
        menuBurguer.style.visibility = "hidden"
        imgClick.src = "./img/burguerMenu.svg"
    }
}



imgClick.addEventListener('click',abrirMenu)