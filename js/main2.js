const form = document.getElementById("novoItem");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event);
    console.log(event.target.elements["nome"])
    console.log(event.target.elements["quantidade"])

})