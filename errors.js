try {
    idade = Number(window.prompt("Informe sua idade"));
    
    if (isNaN(idade)) {
        throw "Isso não é um número";
    }
    if (idade==0) {
        throw "Valor vazio";
    }
    
    console.log(`${idade} é um número`);
    
} catch (error) {
    
    console.log(error);
    
} finally{
    console.log("finalizando o programa");
}