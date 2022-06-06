let nome = "Jefferson Candido";
//nome = nome.length;
//nome = nome.charAt(1);
//nome = nome.indexOf("J");
//nome = nome.toLowerCase();
//nome = nome.toUpperCase();
//nome = nome.replaceAll("n","c")

let primeiroNome;
let ultimoNome;

//primeiroNome = nome.slice(10);
//ultimoNome = nome.slice(0,9);

//method chaining
primeiroNome = nome.slice(0,nome.indexOf(" ")).toUpperCase();
ultimoNome = nome.slice(nome.indexOf(" ") + 1).toLowerCase();





document.getElementById("titulo").innerHTML= "Primeiro Nome: "
    + primeiroNome +" - Último nome: " + ultimoNome;

//console.log(primeiroNome);
console.log(ultimoNome);
