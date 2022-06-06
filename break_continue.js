let valor;

for (let i=0 ; i < 30; i++){
    //document.getElementById("contador").innerHTML = i;
    lista = document.createElement('li');
    lista.id = "novaLista";
    if (i == 13){
        continue;
    } else if (i > 18){
        break;
    }
    lista.appendChild(document.createTextNode("Andar: "+ i));
    document.getElementById("lista").appendChild(lista);
}

