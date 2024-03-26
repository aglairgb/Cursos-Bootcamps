const dados = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade:39,

    fala() {
        console.log(`Minha idade é ${this.idade}`);
    },   //funções que dentro de objetos são métodos

    incrementaIdade() {
        ++this.idade;  //incrementa +1 em idade
    }
}

dados.fala();

dados.incrementaIdade(); //+1
dados.fala();



/*
objeto dentro de uma function

function criaPessoa(nome, sobrenome, idade) {
    return {nome, sobrenome, idade};
}

const pessoa1 = criaPessoa('Jorge', 'Almeida', 24);
const pessoa2 = criaPessoa('Mateus', 'Oliveira', 40);

console.log(pessoa1);
console.log(pessoa2);
*/