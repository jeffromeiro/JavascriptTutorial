class Carro{

    constructor(modelo, cor, power){
        this._tanque = 25;
        this._power = power;
        this._modelo = modelo;
        this._cor =cor;
    }

    get tanque(){
        return `${this._tanque} (${this._tanque/50*100}%)`;
    }

    get modelo(){
        return `${this._modelo}`;
    }
    get cor(){
        return `${this._cor}`;
    }

    get power(){
        return `${this._power}hp`;
    }
    set tanque(tanque){
        if (tanque > 50){
            this._tanque = 50;    
        } else if (tanque < 0){
            this._tanque = tanque;
        } else {
            this._tanque = tanque;
        }
    }
}

function colocaGasolina(carro, litros){
    carro.tanque=litros;
}

function buscaHP(carro){
    console.log(carro.power);
}

let cartas=[10];
cartas.push(5);
const carros = [];
carros.push(new Carro("ferrari", "vermelho",1700));
carros.push(new Carro("fusca", "amarelo",700));
carros.push(new Carro("gol", "branco",800));
carros.push(new Carro("corsa", "azul",500));
carros.push(new Carro("celta", "vermelho",500));



for (const carro of carros){
    colocaGasolina(carro, 20);
    console.log(carro.modelo);
    console.log(carro.cor);    
    console.log(carro.tanque);
    console.log("############");
}
