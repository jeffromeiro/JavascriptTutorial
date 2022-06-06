class Animal {

    vivo = true;
    nome;
    constructor(nome, idade){
        this.nome= nome;
        this.idade= idade;
    }
    come(){
        console.log(`O ${this.nome} está comendo`);
    }

    dorme(){
        console.log(`O ${this.nome} está dormindo`);
    }
}

class Coelho extends Animal {

    constructor(nome, idade, velocidadeCorrida){

        super(nome, idade);
        this.velocidadeCorrida = velocidadeCorrida;
    }
    
    corre(){
        console.log(`O ${this.nome} está correndo`);
    }
}

class Peixe extends Animal {
    
    constructor(nome, idade, velocidadeNado){

        super(nome, idade);
        this.velocidadeNado = velocidadeNado;
    }

    nada(){
        console.log(`O ${this.nome} está nadando`);
    }
}

class Falcao extends Animal {
    
    constructor(nome, idade, velocidadeVoo){

        super(nome, idade);
        this.velocidadeVoo = velocidadeVoo;
    }
    
    //nome="Falcão";
    voa(){
        console.log(`O ${this.nome} está voando`);
    }
}

falcao1 = new Falcao("Falcão",2,90);
falcao1.come();
falcao1.voa();
console.log(falcao1.nome);
console.log(falcao1.idade);
console.log(falcao1.velocidadeVoo);