"use strict"

const imgClick = document.getElementById('imgClick')
const ul = document.getElementById('lista_menu')
const imgs= [
    'var(--imagem1)',
    'var(--imagem2)'
]

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
        if(document.body.id == "pagina_inicial"){
            imgClick.src = "./src/img/burguerMenu.svg"
        }else{
            imgClick.src = "../img/burguerMenu.svg"
        }
        await criarListaDeNomes()
    }else{
        menuBurguer.style.visibility = "hidden"
        if(document.body.id == "pagina_inicial"){
            imgClick.src = "./src/img/xAoClique.png"
        }else{
            imgClick.src = "../img/xAoClique.png"   
        }
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