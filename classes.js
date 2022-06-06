class Aluno {
    
    static qtdAlunos=0;

    constructor(nome, rg, idade, serie){
        
        this.nome=nome;
        this.rg = rg;
        this.idade=idade;
        this.serie=serie;
        Aluno.qtdAlunos+=1;
    }
    
    static primeirochegar(){
        console.log("Primeiro aluno a chegar na sala");
    }
    estuda(){
        console.log(`O aluno ${this.nome} está estudando na série ${this.serie}`);
    }

    intervalo(){
        console.log(`O aluno ${this.nome} está no intervalo`);
    }

    contaAlunos(){
        console.log(`Há ${Aluno.qtdAlunos} aluno(s) na sala`);
    }

}
alunos=[];
for (i=0; i < 10; i++){
    alunos[i] = new Aluno("aluno"+(i+1), "299908239", 12, "7-B"); 
}

console.log(Aluno.qtdAlunos);
console.log(Aluno.primeirochegar());

console.log(alunos[0].nome);
