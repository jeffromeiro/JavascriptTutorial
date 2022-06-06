let carros = ["gol","ferrari", "fusca","ka","corsa"];
//insere um elemento no final da array 
carros.push("celta");
carros.push("renegade");
//remove o ultimo elemento de uma array
carros.pop();
//insere um elemento no inicio da array
carros.unshift("corolla");
console.log(carros);
console.log(carros.length);
//remove o elemento no início da array
carros.shift();
//console.log(carros);
//console.log(carros.length);
//console.log(carros.indexOf("fusca"));
//for (let i=0; i < carros.length; i++){
//    console.log(carros[i]);
//}
//for (let i = carros.length-1; i>=0; i--){
//    console.log(carros[i]);
//}
//sort e reverse
carros.sort().reverse();
//for (let carro of carros){
//    console.log(carro);
//}

let frutas = ["banana", "maça", "laranja"];
let carnes = ["peixe", "frango", "linguiça"];
let graos = ["amendoins", "castranha do pará", "nozes"];

let alimentos = [frutas, carnes, graos];
//console.log(alimentos);
/*
for (let i=0; i < alimentos.length; i++){
    for (let j=0; j < alimentos[i].length; j++){
        console.log(alimentos[i][j]);
    }
    console.log("####")
    
}
*/

for (alimento of alimentos){
    for (tipo of alimento){
        console.log(tipo);
    }
}
