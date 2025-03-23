

async function carregar() {
    const url = `https://api.allorigins.win/get?url=https://www.demonslayer-api.com/api/v1/characters?limit=45`;
    const response = await fetch(url)
        
    const data = await response.json()
    return JSON.parse(data.contents).content

}

async function dadosPersonagemProcuradoPorId(id) {
    const url = `https://api.allorigins.win/get?url=https://www.demonslayer-api.com/api/v1/characters?id=${id}`;
    const response = await fetch(url)
    const data = await response.json()
    return JSON.parse(data.contents).content
}



async function carregarPersonagemProcurado() {
    const cardPersonagem = document.getElementById('cardPersonagem')

    const dados = await dadosPersonagemProcuradoPorId(idPersonagem)

    dados.forEach(function(personagem){
        if(personagem.id == idPersonagem){
            console.log(personagem.combat_style)
            const grupoImagemCard = document.createElement('div')
            grupoImagemCard.classList.add('grupoImagemCard')
            const imgCard = document.createElement('div')
            imgCard.classList.add('imgCard')
            const caixaDeTextos = document.createElement('div')
            caixaDeTextos.classList.add('caixaDeTextos')
            const titulosCard = document.createElement('div')
            titulosCard.classList.add('titulosCard')
            const h1Procurado = document.createElement('h1')
            const pProcurado = document.createElement('p')
            const topicos = document.createElement('div')
            topicos.classList.add('topicos')
            const topicosDestacados1 = document.createElement('div')
            topicosDestacados1.classList.add('topicosDestacados1')
            const textosTopicos1 = document.createElement('div')
            textosTopicos1.classList.add('textosTopicos1')
            const pTopicos1 = document.createElement('p')
            pTopicos1.classList.add('textoEstilizado')
            const pTopicos2 = document.createElement('p')
            const textosTopicos2 = document.createElement('div')
            textosTopicos2.classList.add('textosTopicos2')
            const pTopicos3 = document.createElement('p')
            pTopicos3.classList.add('textoEstilizado')
            const pTopicos4 = document.createElement('p')
            const topicosDestacados2 = document.createElement('div')
            topicosDestacados2.classList.add('topicosDestacados2')
            const textosT2 = document.createElement('div')
            textosT2.classList.add('textosTopicos1')
            const pTopicos5 = document.createElement('p')
            pTopicos5.classList.add('textoEstilizado')
            const pTopicos6 = document.createElement('p')
            const textosT3 = document.createElement('div')
            textosT3.classList.add('textosTopicos2')
            const pTopicos7 = document.createElement('p')
            pTopicos7.classList.add('textoEstilizado')
            const pTopicos8 = document.createElement('p')
            const frase = document.createElement('div')
            frase.classList.add('frase')
            const pFrase = document.createElement('p')

            // Adicionando conteudo
            imgCard.style.backgroundImage = `url('${personagem.img}')`
            h1Procurado.textContent = personagem.name
            pProcurado.textContent = personagem.description
            pTopicos1.textContent = "Clã:"
            pTopicos2.textContent = personagem.affiliation.name
            pTopicos3.textContent = "Raça:"
            pTopicos4.textContent = personagem.race
            pTopicos5.textContent = "Respiração:"
            pTopicos6.textContent = personagem.combat_style[0].name
            pTopicos7.textContent = "Idade:"
            pTopicos8.textContent = personagem.age
            pFrase.textContent = personagem.quote


            // Adicionando aos pais
            
            
        

           
            

            
            caixaDeTextos.appendChild(titulosCard)
            caixaDeTextos.appendChild(topicos)
            titulosCard.appendChild(h1Procurado)
            titulosCard.appendChild(pProcurado)
            frase.appendChild(pFrase)
            caixaDeTextos.appendChild(frase)
            textosT3.appendChild(pTopicos7)
            textosT3.appendChild(pTopicos8)
            topicosDestacados2.appendChild(textosT3)
            textosT2.appendChild(pTopicos5)
            textosT2.appendChild(pTopicos6)
            topicosDestacados2.appendChild(textosT2)
            topicos.appendChild(topicosDestacados2)
            textosTopicos2.appendChild(pTopicos3)
            textosTopicos2.appendChild(pTopicos4)
            topicosDestacados1.appendChild(textosTopicos2)
            textosTopicos1.appendChild(pTopicos1)
            textosTopicos1.appendChild(pTopicos2)
            topicosDestacados1.appendChild(textosTopicos1)
            topicos.appendChild(topicosDestacados1)
            

            grupoImagemCard.appendChild(imgCard)
            cardPersonagem.appendChild(grupoImagemCard)
            cardPersonagem.appendChild(caixaDeTextos)
            
        }
    })

}

async function carregarTelaPrincipal(){

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
            button.classList.add('procurar')
            button.id = personagem.id

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

async function carregarTelaTodosOsPersonagens(){

    // Criando / pegando elementos principais
    const containerCards = document.getElementById('container-card')
    const informacoes = await carregar()
    informacoes.forEach(function(personagem){
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
        button.classList.add('procurar')
        button.id = personagem.id

        // Adicionando valor
        imagem.style.backgroundImage = `url('${personagem.img}')`
        nome.textContent = personagem.name
        paragrafo.textContent = personagem.description
        button.textContent = "SEE MORE HERE"

        //Edições no css
        containerCards.style.gridTemplateColumns = '1fr 1fr 1fr'
        containerCards.style.gap = "40px"


        card.style.width = "435px"
        card.style.height = "237px"
        card.style.marginBottom = "5px"

        imagem.style.width = "177px"
        imagem.style.height = "220px"

        nome.style.fontSize = "18px"
        paragrafo.style.fontSize = "6px"

        button.style.width = "191px"
        button.style.height = "35px"

        //Adicionando os filhos
        textos.appendChild(nome)
        textos.appendChild(paragrafo)
        textos.appendChild(button)

        grupoCard.appendChild(grupoImagem)

        grupoImagem.appendChild(imagem)
        grupoCard.appendChild(textos)
        card.appendChild(grupoCard)
        containerCards.appendChild(card)
        
    })


}

document.addEventListener('click',function(event){
    if(event.target.classList.contains('procurar')){
        const personagemId = event.target.id
        procurarPersonagem(personagemId)
    }
})

async function encontrarIdPorNome(nomeDigitado){
    const personagens = await carregar()
    console.log(personagens)
    const personagemEncontrado = personagens.find(p => p.name.toLowerCase().includes(nomeDigitado.toLowerCase()))

    return personagemEncontrado ? personagemEncontrado.id : null
}

async function procurarPeloInput(){
    const nomeDigitado = document.getElementById('pesquisar').value.trim();
    if(!nomeDigitado) return

    const idEncontrado = await encontrarIdPorNome(nomeDigitado)

    if(idEncontrado){
        procurarPersonagem(idEncontrado)
    }else{
        alert("Personagem/Respiração não encontrada")
    }
}

function procurarPersonagem(id){
    window.location.href = `personagem.html?id=${id}`
}

function obterIdPersonagem(){
    const params = new URLSearchParams(window.location.search)
    const idRecolhido = params.get('id')

    return idRecolhido
}

const idPersonagem = obterIdPersonagem()

document.addEventListener("DOMContentLoaded",function(){
    const bodyID = document.body.id
    const inputPesquisa = document.getElementById("pesquisar")

    inputPesquisa.addEventListener("keydown", async function(event){
        if(event.key === "Enter"){
            procurarPeloInput()
        }
    })

    if(bodyID == "pagina_inicial"){
        carregarTelaPrincipal()
    }else if(bodyID == "personagem-procurado"){
        carregarPersonagemProcurado()
        dadosPersonagemProcuradoPorId(idPersonagem)
    }else if(bodyID == "todos_os_personagens"){
        carregarTelaTodosOsPersonagens()
    }
})






