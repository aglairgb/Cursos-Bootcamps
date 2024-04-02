//iniciar com maíusculo indica contructor
function Pessoa(nome, idade) {
    this.nome = nome,
    this.idade = idade
}

const bruno = new Pessoa('Bruno', 23);

Pessoa.prototype.falar = function() {
    console.log(`Meu nome é: ${this.nome}`);
}

bruno.falar();

//EQUIVALENTE AO CÓDIGO ABAIXO:

class Pessoa {
    constructor (nome, idade) {
        this.nome = nome,
        this.idade = idade
    }

    falar() {
        console.log(`Meu nome é: ${this.nome}`);
    }
}


