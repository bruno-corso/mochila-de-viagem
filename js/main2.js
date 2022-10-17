const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    criaElemento(event.target.elements["nome"].value, event.target.elements["quantidade"].value)
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
}