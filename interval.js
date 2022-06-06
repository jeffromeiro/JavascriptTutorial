let interval;
let count=0;
document.getElementById("meuBotao").onclick = 
() => {
    clearInterval(interval);
    let numero=Number(document.getElementById("entrada").value);
    interval=setInterval(exibeNumero,1000,numero);
    console.log("após interval");

};

function exibeNumero(num){
    count+=1;
    document.getElementById("time").innerHTML = count;
    console.log("Count:",count);
    console.log("Num:",num);
    if (count >= num){
        console.log("entrou no if");
        clearInterval(interval);
        
    }
    

}

