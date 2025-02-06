//? Faz com que o navegardor não te deixe errar coisas simples (ex: não definir uma variável)
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
    novoSpan.textContent = categoria.nome

    novoItem.appendChild(novaImagem)
    novoItem.appendChild(novoSpan)
    novoItem.style = `--cor-hover: ${categoria.cor}`

    lista.appendChild(novoItem)
}

categorias.forEach(criarMenu)

///=====================================================================================================================

const produtos = [
    { nome: "Smartphone", descricao: "Celular Android com câmera de alta resolução.", preco: "R$ 1.499,00", imagem: "img-celular-S20.png"},
    { nome: "Notebook", descricao: "Notebook com processador Intel Core i7.", preco: "R$ 2.299,00", imagem: "notebook.png"},
    { nome: "Console", descricao: "Console de última geração com suporte a 4K.", preco: "R$ 3.999,00", imagem: "img-console-PS5.png"},
    { nome: "Cadeira Gamer", descricao: "Cadeira ergonômica para longas sessões de jogo.", preco: "R$ 599,00", imagem: "img-cadeira-gamer.png"}
]

function criarCard(produto) {
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
    
    const botao = document.createElement("button")
    botao.textContent = "Comprar"
    botao.classList.add("botao-compra")
    
    card.appendChild(img)
    card.appendChild(nome)
    card.appendChild(descricao)
    card.appendChild(preco)
    card.appendChild(botao)
    
    container.appendChild(card)
}

produtos.forEach(criarCard)
