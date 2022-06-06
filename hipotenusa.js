document.getElementById("calculo").onclick = function(){
   
    let lado1 = Number(document.getElementById("lado1").value);
    let lado2 = Number(document.getElementById("lado2").value);

    let pitagoras = Math.sqrt(Math.pow(lado1,2) + Math.pow(lado2,2));

    console.log(pitagoras);
    
    document.getElementById("resultado").innerText="O resultado é "+ pitagoras;
}