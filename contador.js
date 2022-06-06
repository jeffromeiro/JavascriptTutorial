let valor = 0;

//document.getElementById("aumentar").onclick = function(){
//    valor++;
//    document.getElementById("valor").innerHTML=valor;
//}

document.getElementById("aumentar").onclick = aumentar;


document.getElementById("diminuir").onclick = function(){
    valor--;
    document.getElementById("valor").innerHTML=valor;
}

document.getElementById("zerar").onclick = function(){
    valor=0;
    document.getElementById("valor").innerHTML=valor;
}

document.getElementById("aleatorio").onclick = function(){
    valor=Math.round(Math.random() * 1000);
    document.getElementById("valor").innerHTML=valor;
}


function aumentar(){
    valor++;
    document.getElementById("valor").innerHTML=valor;
}