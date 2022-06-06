//import {PI,celsiusToFahrenheit,fahrenheitToCelsius} from "./modules_util.js";
import * as util from "./modules_util.js";
//console.log(PI);
console.log(util.PI);
//console.log(fahrenheitToCelsius(1));
console.log(util.fahrenheitToCelsius(1));
//console.log(celsiusToFahrenheit(0));
console.log(util.celsiusToFahrenheit(0));


async function carregaArquivo(){
    const promise = new Promise((resolve, reject) => {
        let loaded= true;

        if (loaded){
            return resolve("Arquivo Carregado");
        } else{
            throw reject("erro no carregamento");
        }
        });
    try{
        console.log(await promise);
    } catch(erro){
        console.log(erro);
    }
}

carregaArquivo();

document.title="Exemplo de modulos, promises e manipulação da DOM"
document.body.style.backgroundColor="darkBlue";
document.getElementById("titulo").innerHTML = "Novo Título";


let valor=1;
let soma=1;
for (let i=2; i<=200;i++){
    
    
    valor = valor+i;
    //console.log(`${soma++} + ${i}= ${valor}`); 
}
console.log(valor);

let menor=1;
let maior=200;
let intervalo=maior/2;

console.log((maior+menor) * intervalo)


