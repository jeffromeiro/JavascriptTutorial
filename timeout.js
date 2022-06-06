document.getElementById("meuBotao").onclick = function(){
    clearTimeout(m1);
    clearTimeout(m2);
    clearTimeout(m3);    

}


function mensagem1(){
    alert("Primeira mensagem");
}

function mensagem2(){
    alert("Segunda mensagem");
}

function mensagem3(){
    alert("Terceira mensagem");
}


let m1 = setTimeout(mensagem1, 3000);
let m2 = setTimeout(mensagem2, 10000);
let m3 = setTimeout(mensagem3, 15000);



