let nota = null; 
document.getElementById("botao").onclick = function(){
    nota = String(document.getElementById("nota").value).toUpperCase();

    switch (nota) {
        case "A":
            window.alert("Parabéns, nota A");    
            break;
        case "B":
            window.alert("Muito bom, nota B");    
            break;
        case "C":
            window.alert("Passou, nota C");    
            break;
        case "D":
            window.alert("Recuperação, nota D");    
            break;
        case "E":
            window.alert("Repetiu, nota E");    
            break;
    
        default:
            window.alert("Nota Inválida, tente novamente");
            break;
    }
    
}


document.getElementById("botaoNumero").onclick = function(){
    nota = Number(document.getElementById("nota").value);

    switch (true) {
        case nota == 10:
            window.alert("Parabéns, perfeito");    
            break;
        case nota >= 8 && nota < 10:
            window.alert("Muito bom");    
            break;
        case nota >=6:
            window.alert("Passou, até o ano que vem");    
            break;
        case nota >= 4:
            window.alert("Recuperação");    
            break;
        case nota >= 0.01:
            window.alert("Repetiu");    
            break;
        default:
            window.alert("Nota Inválida, tente novamente");
            break;
    }
    
}

