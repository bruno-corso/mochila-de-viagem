const form = document.getElementById("novoItem"); // formulário que será digitado nome e quantidade
const lista = document.getElementById("lista"); // lista com os itens adicionados
const itens = []; // array para salvar dentro do localStorage

form.addEventListener("submit", (event) => {
    event.preventDefault(); //interromper o 'enviar' informações para mesma tela no "submit"
    const nome = event.target.elements["nome"]; //colocando o nome digitado na variavel 'nome'
    const quantidade = event.target.elements["quantidade"]; //colocando a quantidade digitado na variável
    criaElemento(nome.value, quantidade.value); //chamr a função para adicionar item na lista
    nome.value = ""; //zerar campo
    quantidade.value = ""; //zerar campo
})

function criaElemento(nome, qtd) {
    console.log(nome);
    console.log(qtd);

    const novoItem = document.createElement('li'); //criando elemento da tag <li> no html
    novoItem.classList.add("item"); // adicionando a classe "item" no elemento 'novoItem'
    const qtdItem = document.createElement('strong'); //criando outro elemento, dessa vez com a tag <strong>
    qtdItem.innerHTML = qtd; // inserindo dentro do elemento 'qtdItem' o parâmetro 'qtd'
    novoItem.appendChild(qtdItem); //inputando o elemento 'qtdItem' para dntro do elemento 'novoItem'
    novoItem.innerHTML += nome; // adicionando dentro do elemento 'novoItem' o parâmetro 'nome'
    lista.appendChild(novoItem); //inputando o elemento 'novoItem' para dntro da lista
    console.log(qtdItem);
    console.log(novoItem);

    const itemAtual = {
        "nome": nome,
        "quantidade": qtd
    } //criando um objeto para salvar no localStorage

    itens.push(itemAtual); // adicionado o objeto no array []
    localStorage.setItem("itens", JSON.stringify(itens)); //incluindo o objeto dentro do localStorage dentro da Key 'itens'

}

