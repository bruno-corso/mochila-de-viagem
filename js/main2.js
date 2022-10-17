const form = document.getElementById("novoItem"); // formulário que será digitado nome e quantidade
const lista = document.getElementById("lista"); // lista com os itens adicionados
const itens =  JSON.parse(localStorage.getItem("itens")) || []; // buscar array existente no localsStorage ou criar um array
console.log(itens);

itens.forEach((element)=>{
    criaElemento(element);
})

form.addEventListener("submit", (event) => {
    event.preventDefault(); //interromper o 'enviar' informações para mesma tela no "submit"
    const nome = event.target.elements["nome"]; //colocando o nome digitado na variavel 'nome'
    const quantidade = event.target.elements["quantidade"]; //colocando a quantidade digitado na variável

    const existe = itens.find(element => element.nome === nome.value); //se encontrar o elemento com nome idêntico dentro dos itens já existentes no array 'itens', o elemento é atribuido a const 'existe'

    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    } //criando um objeto para salvar no localStorage

    if (existe) {
        console.log("Item repetido");
        itemAtual.id = existe.id; //o id do objeto itemAtual recebe o id do obejto 'existe'
        atualizaQtd(itemAtual); // chamar a função para atualizar a quantidade
        itens[existe.id] = itemAtual; //atualiza o objeto no array 'itens'
    }
    else{
        console.log("Item novo!");
        itemAtual.id = itens.length; //estabelece que o id será do valor do lenght do array 'itens' naquele momento
        criaElemento(itemAtual); //chamar a função para adicionar item na lista
        itens.push(itemAtual); // adicionado o objeto no array []
    }
    localStorage.setItem("itens", JSON.stringify(itens)); //incluindo o objeto dentro do localStorage dentro da Key 'itens'
    nome.value = ""; //zerar campo
    quantidade.value = ""; //zerar campo
})

function criaElemento(item) {
    const novoItem = document.createElement('li'); //criando elemento da tag <li> no html
    novoItem.classList.add("item"); // adicionando a classe "item" no elemento 'novoItem'
    const qtdItem = document.createElement('strong'); //criando outro elemento, dessa vez com a tag <strong>
    qtdItem.innerHTML = item.quantidade; // inserindo dentro do elemento 'qtdItem' a quantidade do objeto enviado como parâmetro
    qtdItem.dataset.id = item.id; // atribuiu o data-id dentro do elemento
    novoItem.appendChild(qtdItem); //inputando o elemento 'qtdItem' para dntro do elemento 'novoItem'
    novoItem.innerHTML += item.nome; // adicionando dentro do elemento 'novoItem' o 'nome' objeto enviado como parâmetro
    lista.appendChild(novoItem); //inputando o elemento 'novoItem' para dntro da lista
}

function atualizaQtd(item){
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade; // busca pelo data- e atualiza o valor da quantidade do objeto
}