let elemento = document.body;
let firstChild = elemento.firstElementChild;
firstChild.style.backgroundColor="cyan";

let lastChild = elemento.lastElementChild;
lastChild.style.backgroundColor="cyan";
//console.log(lastChild);

let lista = document.querySelector("ul");
let item = lista.lastElementChild;
//console.log(item);

item.style.backgroundColor="yellow";

previousItem = item.previousElementSibling;
previousItem.style.backgroundColor="orange";

previousItem2 = previousItem.previousElementSibling;
previousItem2.style.backgroundColor="lightblue";

let firstItem = lista.firstElementChild;
firstItem.style.backgroundColor="pink";

firstItem.parentElement.style.fontWeight="bold";

firstChild.parentElement.style.backgroundColor="lightgrey";

let cartoes = document.querySelector("#idLista");
console.log(cartoes.children);
let children = Array.from(cartoes.children);
children.forEach(child => child.style.backgroundColor="cyan");



