console.time("inicio");

setInterval(exibeData,1000);


function exibeData(){
    
    document.getElementById("data").innerHTML=formataData();
}

function formataData(){
    
    data = new Date();
    dia = formataZeros(data.getDate());
    mes = formataZeros(data.getMonth()+1);
    ano = data.getFullYear();
    hora= formataZeros(data.getHours());
    minuto=formataZeros(data.getMinutes());
    segundo=formataZeros(data.getSeconds());
    
    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;

    function formataZeros(valor){
        return valor < 10 ? "0" + valor : valor;
    }
}
console.timeEnd("inicio");
