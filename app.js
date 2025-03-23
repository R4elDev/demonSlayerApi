

async function carregar() {
    const url = `https://api.allorigins.win/get?url=https://www.demonslayer-api.com/api/v1/characters?limit=45`;
    const response = await fetch(url)
        
    const data = await response.json()

    return JSON.parse(data.contents).content
}

async function carregarTela(){

    // Criando / pegando elementos principais
    const containerCards = document.getElementById('container-card')
    const informacoes = await carregar()
    informacoes.forEach(function(personagem){
        if(personagem.id == 1 || personagem.id == 10 || personagem.id == 3 || personagem.id == 2 ){
            // Criando elementos varridos
            const card = document.createElement('div')
            card.classList.add('card')
            const grupoCard = document.createElement('div')
            grupoCard.classList.add('grupoCard')
            const grupoImagem = document.createElement('div')
            grupoImagem.classList.add('grupoImagem')
            const imagem = document.createElement('div')
            imagem.classList.add('imagem')
            const textos = document.createElement('div')
            textos.classList.add('textos')
            const nome = document.createElement('h1')
            nome.classList.add('nome')
            const paragrafo = document.createElement('p')
            const button = document.createElement('button')

            // Adicionando valor
            imagem.style.backgroundImage = `url('${personagem.img}')`
            nome.textContent = personagem.name
            paragrafo.textContent = personagem.description
            button.textContent = "SEE MORE HERE"


            textos.appendChild(nome)
            textos.appendChild(paragrafo)
            textos.appendChild(button)

            grupoCard.appendChild(grupoImagem)

            grupoImagem.appendChild(imagem)
            grupoCard.appendChild(textos)
            card.appendChild(grupoCard)
            containerCards.appendChild(card)
        }
        
    })


}


carregarTela()
