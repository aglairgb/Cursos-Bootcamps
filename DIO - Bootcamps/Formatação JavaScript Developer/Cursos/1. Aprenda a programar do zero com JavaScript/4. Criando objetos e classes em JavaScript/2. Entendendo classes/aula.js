//objeto
class Pessoa {
    //atributos
    nome;
    idade;
    anoNascimento;

    constructor(nome,idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2024 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos.`)
    }
}

//instâncias
//Com constructor:
//const vitor = new Pessoa('Renan', 22);
//console.log(vitor)

//Sem constructor:
// const jorge = new Pessoa();
// jorge.nome = 'Jorge Paulo';
// jorge.idade = 23;
// jorge.descrever();
// console.log(jorge);


function compararPessoas(p1, p2){
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}.`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}.`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade.`);
    }
}

const vitor = new Pessoa('Vitor', 40);
const angelo = new Pessoa('Angelo', 30);

compararPessoas(vitor, angelo);