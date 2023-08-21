//comparar idades

class pessoa {
    nome;
    idade;
    anoNascimento;

    constructor(nome,idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2022 - idade;
    }

    descrever(){
        console.log("Nome: " + this.nome + ", Idade: " + this.idade + " anos," + " Nascimento = " + this.anoNascimento);  //método
    }
}


let p1 = new pessoa("Paulo", 36);
let p2 = new pessoa("Ricardo", 36);


function comparaIdade(p1,p2) {
    return p1.idade > p2.idade ? `${p1.nome} é mais velho (a).` :
           p2.idade > p1.idade ? `${p2.nome} é mais velho (a).` :
           `${p1.nome} e ${p2.nome} possuem a mesma idade (${p1.idade})` 
           
}

console.log(comparaIdade(p1,p2))