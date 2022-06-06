let resultado;
let tipo;
document.getElementById("botao").onclick = function(){
    let valorTemperatura = Number(document.getElementById("entrada").value);
    let celsius = document.getElementById("celsius").checked;
    let fahrenheit = document.getElementById("fahrenheit").checked;

    switch (true) {
        case celsius && valorTemperatura != "":
            resultado = (valorTemperatura-32) / 1.8; 
            tipo="celsius";   
            break;
        case fahrenheit && valorTemperatura != "":
            resultado = (valorTemperatura*1.8) + 32;    
            tipo="fahrenheit";
            break;
        default:
            resultado=""
            tipo="";
            break;
    }

    exibeResultado(resultado, tipo);

    
}

function exibeResultado(resultado, tipo){
    console.log(tipo);
    console.log(resultado);
    if (tipo == "" || resultado == ""){
        document.getElementById("resultado").innerHTML= "Escolha as opções acima";    
    } else {
        resultado = Number(resultado).toLocaleString("pt-BR", {style: "unit" , unit : tipo});
        document.getElementById("resultado").innerHTML=`O resultado é ${resultado}`;
    }
}