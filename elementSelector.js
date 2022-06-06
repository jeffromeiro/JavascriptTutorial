let cartoes = document.getElementsByName("cartoes");
//let cartoes = document.querySelectorAll(".cartao");
console.log(cartoes[0].name);

cartoes.forEach(cartao => console.log(cartao.value));

let lista = document.getElementsByTagName("li");
console.log(lista[0].innerText);
lista.forEach(l => console.log(l));


let listas = document.querySelectorAll("li");

listas.forEach(li=>{
    li.style.backgroundColor="purple";

});


