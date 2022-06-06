document.getElementById("botao").onclick = function (){
    idade=document.getElementById("entrada").value;
    check_idade(idade);
    testa_locale(Number(idade));
}

function check_idade(idade){
    resultado = idade >= 18 ? "adulto" : "menor de idade";
    //console.log(resultado);
    //literal templates
    texto =`A idade de ${idade} é ${resultado}!!!`;
    document.getElementById("resultado").innerHTML = texto; 
    document.getElementById("entrada").value="";
}

function testa_locale(idade){

    //let idade=10;
    console.log(`Tem ${idade} anos`);
    let local="pt-BR";
    let moeda="BRL";
    let temperatura="celsius";

    
    //idade=idade.toLocaleString(local,{style:"currency", currency : moeda});
    //idade=idade.toLocaleString(local,{style:"unit", unit: temperatura});
    idade=idade.toLocaleString(local,{style:"percent"});
    //idade = idade.toLocaleString(undefined , {style:"percent"});
     //idade = idade.toLocaleString(moeda , {unity:"celcius"});
    
    document.getElementById("testeLocale").innerHTML = `E se escreve ${idade}`;

}