"use strict"

const categorias = [
    {nome: "Celulares", icon: "icon-celular.png", cor: "red"},
    {nome: "Informática", icon: "icon-notebook.png", cor: "blue"},
    {nome: "Games", icon: "icon-controle2.png", cor: "green"},
    {nome: "Móveis", icon: "icon-mesa.png", cor: "yellow"}
]

function criarMenu(categoria){
    const novoItem = document.createElement("li")
    const novaImagem = document.createElement("img")
    const novoSpan = document.createElement("span")
    const lista = document.getElementById("menu")

    novaImagem.src = `./img/${categoria.icon}`
    novaImagem.alt = categoria.nome
    novoSpan.textContent = categoria.nome

    novoItem.appendChild(novaImagem)
    novoItem.appendChild(novoSpan)
    novoItem.style = `--cor-hover: ${categoria.cor}`

    lista.appendChild(novoItem)
}

categorias.forEach(criarMenu)

///=====================================================================================================================

function criarEstrelas(avaliacao){
    const estrelasCheias = Math.floor(avaliacao)
    const temMeiaEstrela = avaliacao % 1 !== 0
    const estrelasVazias = 5 - estrelasCheias - (temMeiaEstrela ? 1 : 0)

    let estrelasHTML = ''

    for (let i = 0; i < estrelasCheias; i++){
        estrelasHTML += '⭐'
    }

    if (temMeiaEstrela){
        estrelasHTML += '<span class="meia-estrela">⭐</span>'
    }

    for (let i = 0; i < estrelasVazias; i++){
        estrelasHTML += '☆'
    }

    return estrelasHTML
}

///=====================================================================================================================

const produtos = [
    { nome: "Smartphone", descricao: "Celular Android com câmera de alta resolução.", preco: "R$ 1.499,00", imagem: "img-celular-S20.png", avaliacao: 5},
    { nome: "Notebook", descricao: "Notebook com processador Intel Core i7.", preco: "R$ 2.299,00", imagem: "notebook.png", avaliacao: 4.4},
    { nome: "Console", descricao: "Console de última geração com suporte a 4K.", preco: "R$ 3.999,00", imagem: "img-console-PS5.png", avaliacao: 4.9},
    { nome: "Cadeira Gamer", descricao: "Cadeira ergonômica para longas sessões de jogo.", preco: "R$ 599,00", imagem: "img-cadeira-gamer.png", avaliacao: 3.7}
]

function criarCard(produto){
    const container = document.getElementById("produtos")
    
    const card = document.createElement("div")
    card.classList.add("card")
    
    const img = document.createElement("img")
    img.src = `./img/${produto.imagem}`
    img.alt = produto.nome
    
    const nome = document.createElement("h2")
    nome.textContent = produto.nome
    
    const descricao = document.createElement("p")
    descricao.textContent = produto.descricao
    
    const preco = document.createElement("span")
    preco.classList.add("preco")
    preco.textContent = produto.preco
   
    // Criando a área de avaliação
    const avaliacao = document.createElement("div")
    avaliacao.classList.add("avaliacao")
    avaliacao.innerHTML = criarEstrelas(produto.avaliacao)

    const botao = document.createElement("button")
    botao.textContent = "Comprar"
    botao.classList.add("botao-compra")
    
    card.appendChild(img)
    card.appendChild(nome)
    card.appendChild(descricao)
    card.appendChild(avaliacao)
    card.appendChild(preco)
    card.appendChild(botao)
    
    container.appendChild(card)
}

produtos.forEach(criarCard)
