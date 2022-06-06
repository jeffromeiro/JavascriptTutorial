let numeroDefinido = Math.floor(Math.random()*100+1);
let tentativas = 0;

console.log(numeroDefinido);
document.getElementById("botao").onclick = function (){
    let valorInserido = document.getElementById("entrada").value;
    tentativas+=1;    
    if (valorInserido == numeroDefinido){
        if (tentativas==1){
            document.getElementById("resultado").innerHTML = `Você acertou, ${valorInserido} foi o número inserido<br>
            Foi necessária ${tentativas} tentativa`;
        } else {
            document.getElementById("resultado").innerHTML = `Você acertou, ${valorInserido} foi o número inserido<br>
            Foram necessárias ${tentativas} tentativas`;
        }

        
    } else if (valorInserido > numeroDefinido){
        document.getElementById("resultado").innerHTML = `O número ${valorInserido} é maior que o definido`;
    
    } else {
        document.getElementById("resultado").innerHTML = `O número ${valorInserido} é menor que o definido`;
    
    }
    
}