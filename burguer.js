"use strict"

const imgClick = document.getElementById('imgClick')
const ul = document.getElementById('lista_menu')

async function carregar() {
    const url = `https://api.allorigins.win/get?url=https://www.demonslayer-api.com/api/v1/characters?limit=45`;
    const response = await fetch(url)
        
    const data = await response.json()

    return JSON.parse(data.contents).content
}

async function criarListaDeNomes(){
    const carregandoDados = await carregar()
    carregandoDados.forEach(criarLi) 
}

function criarLi(nome){
    const button = document.createElement('button')
    button.classList.add('li_menu_burguer')
    button.textContent = nome.name
    button.id = nome.id
    ul.appendChild(button)
    
}

async function abrirMenu(){

    const menuBurguer = document.getElementById('menuBurguer')
    
    if(menuBurguer.style.visibility == "hidden"){
        menuBurguer.style.visibility = "visible"
        imgClick.src = "./img/xAoClique.png"
        await criarListaDeNomes()
    }else{
        menuBurguer.style.visibility = "hidden"
        imgClick.src = "./img/burguerMenu.svg"
        ul.replaceChildren('')
    }
    
    

    
}

document.addEventListener('click',function(event){
    if(event.target.classList.contains('li_menu_burguer')){
        const personagemId = event.target.id
        procurarPersonagem(personagemId)
    }
})

imgClick.addEventListener('click',abrirMenu)