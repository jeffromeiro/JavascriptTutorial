
/*
let nome = window.prompt("Informe seu nome");
let idade = Number(window.prompt("Informe seu nome"));
*/
 

document.getElementById("button").onclick = function() {
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    //window.alert("Olá "+ nome + ", você têm "+ idade + " anos");
    document.getElementById("h1").innerHTML="Olá "+ nome + ", você têm "+ idade + " anos";

}

let valor="pizza";
valor = Boolean(valor);
console.log(typeof valor);
console.log(valor); 

let idade= "38";
console.log(typeof idade);
idade = Number(idade);
idade+=1
console.log(idade); 

console.log(Math.round(3.49));