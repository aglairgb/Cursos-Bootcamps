/* 
Crie uma classe para representar pessoas.
Para cada pessoa, teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor de seu IMC (imc = peso / (altura * altura)).
Istâncie uma pessoa chamda José, que tenha 70kg e 1,75 de altura e peça pra dizer o valor do seu IMC.

*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return( "Nome: "+ this.nome + ", IMC = " + this.peso / (this.altura*this.altura))
    }
}

let p1 = new Pessoa("José", 70, 1.75);

let p2 = new Pessoa("Vittorya", 51, 1.56);

console.log(p1.calcularImc())
