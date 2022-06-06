
let titulo = document.createElement("h1");
titulo.textContent="Frutas disponíveis";
titulo.style.color="red";

document.body.prepend(titulo);

let listaFrutas = document.querySelector("#frutas");
let item = document.createElement("li");
item.textContent="mexirica";

listaFrutas.insertBefore(item, document.getElementsByTagName("li")[0]);