function hello(nome){
    console.log('Hello ',nome);
}
function ola(name){
    console.log('Ola ',name);
}
function main(nome, callback){
    let name = nome;
    callback(nome);
}
//main("jefferson", hello);
//main("jefferson", ola);

function exibeValor(valor){
    console.log("O valor somado é de "+valor);
} 

function exibeRaiz(valor){
    console.log("A raiz quadrada de "+valor+ " é "+ Math.sqrt(valor));
} 

function soma(callback,...valores){
    let soma=0;
    for (let valor of valores) {
        soma+=valor;
    }
    callback(soma);
}

let numeros = [10, 2, 24, 54, 10];
//soma(exibeValor, ...numeros);
//soma(exibeRaiz, ...numeros);

function par(numero){
    return numero % 2 == 0;
}

function impar(numero){
    return numero % 2 != 0;
}

function filtra(numeros, callback){
    let filtrados=[];
    for (const numero of numeros) {
        //console.log(numero);
        if (callback(numero)){
            filtrados.push(numero);
        }
    }
    return filtrados;
}

let lista = [1,3,4,12,231,123,43,9,84];


console.log(...filtra(lista,par));

function ExibeImpar(elemento, index, array){
    if (impar(elemento)){
        console.log(elemento +" é impar");
        
    }
}
console.log("Exibe impares")
lista.forEach(ExibeImpar);

console.log("Exibe todos")
lista.forEach(print);

function captalizar(elemento, index, array){
    array[index] = elemento[0].toUpperCase() + elemento.substring(1) + this;
}

let nomes = ["jeff", "bella", "ju"];
console.log("Alterar nome com forEach");
nomes.forEach(captalizar, "#");
nomes.forEach(print);

console.log("Concatenar nomes com a função map");
function concatenaNome(elemento, index, array ){
    array[index] = elemento + index + this ;
    return array[index]; 
}

let nomeCompleto= nomes.map(concatenaNome, " Romeiro");

console.log(...nomeCompleto);

function checkNome(elemento){
    return elemento[0]=="J";
}
function print(elemento){
    console.log(elemento);
}

console.log("Filtrar nomes com J");
nomesComJ = nomes.filter(checkNome);
nomesComJ.forEach(print);

console.log("Lista numeros impares");
listaImpar = lista.filter(impar);
listaImpar.forEach(print);

console.log("Filtra adultos");
let idades= [19, 1, 14, 82, 43, 29,9];
let adultos=idades.filter(elemento => elemento >=18)

adultos.forEach(print);

console.log("Gera raiz quadrada")
let raizes = idades.map(elemento => Math.sqrt(elemento));
raizes.forEach(print);

console.log("Soma as idades por 1");
idades.forEach((elemento, index, array) => array[index] = elemento+1);
idades.forEach(print);


function somaIdades(total, elemento){
    return total + elemento;
}
console.log("Soma todas as idades");
//console.log(idades.reduce(somaIdades));
//console.log(idades.reduce((total, elemento)=> total+elemento));
console.log(idades.reduce( function (total, elemento){ return total+elemento} ));

function ordenaAsc(a , b){
    return a - b;
}

function ordenaDesc(a , b){
    return b - a;
}

console.log("Ordena array");
//idades.sort((a,b) => b-a);
//idades.sort(ordenaDesc);
//idades.sort(ordenaAsc);
idades.sort(function (a, b){
    return b -a;
});

idades.forEach(print);

