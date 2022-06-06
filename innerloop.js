document.getElementById("botao").onclick = function (){

    let linhas;
    let colunas;
    let simbolo;

    linhas = buscaValor("linha");
    colunas = buscaValor("coluna");
    simbolo = buscaValor("simbolo");

    desenha(linhas, colunas, simbolo);
}

function buscaValor(label){
    return document.getElementById(label).value;
}

function desenha(linhas, colunas, simbolo) {
    for (let i=0; i < linhas; i+=1 ){
        for (let j=0; j < colunas; j+=1){
            document.getElementById("desenho").innerHTML += simbolo;
        }
        document.getElementById("desenho").innerHTML += "<br>";
    }
}

