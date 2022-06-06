// versão 1

async function carregaArquivo(){
    let loaded= false;

    if (loaded){
        return "Arquivo Carregado";
    } else{
        throw "erro no carregamento";
    } 
}

carregaArquivo().then((valor)=>console.log(valor)).catch((valor)=>console.log(valor));

// versão 2

function carregaArquivoII(){
    let loaded= false;

    
    if (loaded){
        return Promise.resolve("Arquivo Carregado");
    } else{
        return Promise.reject("Erro no carregamento");
    }
    
}
carregaArquivoII().then((valor)=>console.log(valor)).catch((valor)=>console.log(valor));

// versão 3 com await
async function display(){
    try{
        document.getElementById("titulo").innerHTML = await carregaArquivoII();
    } catch(error){
        document.getElementById("titulo").innerHTML = error;
    }
    
}
display();

//versão 4 com await em uma única função

async function carregaArquivoIII(){
    const promise = new Promise((resolve, reject)=>{
        let loaded = false;

        if (loaded){
            resolve("arquivo carregado pela funcão carregaArquivoIII");
        } else {
            reject("erro no carregamento do arquivo (função carregaArquivoIII()");
        }
    })

    try{
        document.getElementById("titulo2").innerHTML = await promise;
    } catch(erro){
        document.getElementById("titulo2").innerHTML = erro;
    }
    
}

carregaArquivoIII();
