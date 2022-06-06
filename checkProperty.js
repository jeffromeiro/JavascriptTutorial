let check;
let radio;
let cartaoEscolhido;

document.getElementById("enviar").onclick = function(){
    check = document.getElementById("checkNews").check;
    radio = document.getElementsByName("cartao");

    
    for (i = 0 ; i < radio.length; i++){
        if (radio[i].checked){
            cartaoEscolhido = radio[i].id;
        }

    }

    if (cartaoEscolhido){
        console.log("foi escolhido "+cartaoEscolhido);
    } else {
        console.log("Não foi selecionado o cartão")
    }
    //console.log(radio);
}