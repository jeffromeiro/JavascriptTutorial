/// Versão 1
/*
const promise = new Promise((resolve, reject)=>{
    let loaded=false;
     loaded ? resolve("arquivo carregado"):reject("erro para carregar arquivo");
})

promise.then(valor=>console.log(valor)).catch(valorErro => console.log(valorErro));
*/

/// Versão 2
/*
const promise2 = new Promise(validaArquivo);

function validaArquivo(resolve, reject){
    let loaded=false;
    loaded ? resolve("arquivo carregado"):reject("erro para carregar arquivo");
}

promise2.then(imprimeResultado).catch(imprimeErro);

function imprimeResultado(valor){
    console.log(valor);
}


function imprimeErro(valor){
    console.log(valor);
}
*/
/// Versão 3
/*
const promise3 = new Promise(
    function(resolve, reject){
        let loaded=true;
        loaded ? resolve("Arquivo carregado"):reject("Falha para carregar arquivo");
    }
);

promise3.then(
 function (valor){
     console.log(valor);
 }   
).catch(
   function (valorErro) {
       console.log(valorErro);
   }
);
*/


const wait =(time, loaded) => new Promise((resolve,reject)=> {
    loaded ? setTimeout(resolve,time,"arquivo carregado") : setTimeout(reject,time, "falha para carregar arquivo");
});

let loaded = true;
wait(3000, loaded).then((valor)=>console.log(valor))
    .catch((valorErro)=>console.log(valorErro));

