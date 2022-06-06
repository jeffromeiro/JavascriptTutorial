const carro = {
    rodas:4,
    portas:5,
    cor: "Preto",
    marca: "ford",
    modelo: "ka",


    acelera : function(){
        console.log(`O ${this.modelo} está acelerando`);
    },

    breca : function(){
        console.log(`O ${this.modelo} está brecando`);
    }

}

carro.modelo="focus";
carro.acelera();
