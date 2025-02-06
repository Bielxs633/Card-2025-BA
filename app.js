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