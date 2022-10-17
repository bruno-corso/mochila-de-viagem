const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");
const itens = [];

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const nome = event.target.elements["nome"];
    const quantidade = event.target.elements["quantidade"];
    criaElemento(nome.value, quantidade.value);
    nome.value = "";
    quantidade.value = "";
})

function criaElemento(nome, qtd) {
    console.log(nome);
    console.log(qtd);

    const novoItem = document.createElement('li');
    novoItem.classList.add("item");
    const qtdItem = document.createElement('strong');
    qtdItem.innerHTML = qtd;
    novoItem.appendChild(qtdItem);
    novoItem.innerHTML += nome;
    lista.appendChild(novoItem);
    console.log(qtdItem);
    console.log(novoItem);

    const itemAtual = {
        "nome": nome,
        "quantidade": qtd
    }

    itens.push(itemAtual);
    localStorage.setItem("itens", JSON.stringify(itens));

}

