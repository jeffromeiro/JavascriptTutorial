
document.getElementById("enviaIdade").onclick = function(){
    let idade = document.getElementById("inputIdade").value;
    let textoLabel;
    if (idade > 60) {
        textoLabel = "Você tem " + idade +" anos, portanto é um aposentado";
    } else if (idade >= 18) {
        textoLabel = "Você tem "+ idade +" anos, portanto é um adulto";
        
    } else {
        textoLabel = "Você tem "+ idade +" anos, portanto é menor de idade";
    }
document.getElementById("resultado").innerHTML=textoLabel;       
}

