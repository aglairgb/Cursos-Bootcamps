/* 
2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoc chamada José que tenha 70kg e peso 1,75 de altura e peça ao José para dizer
o valor do seu IMC;
*/

class Imc {
    nome;
    peso;
    altura;

    constructor (nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
        this.resultadoImc = (this.calculoImc().toFixed(2));
        this.resultadoClassificacaoImc = this.classificarImc();
    }

    calculoImc() {
        return this.peso / (this.altura * this.altura);
    }

    classificarImc() {
        return this.resultadoImc < 18.5 ? 'Abaixo do peso' :
               this.resultadoImc >18.5 && this.resultadoImc < 25 ? 'Peso normal' :
               this.resultadoImc >= 25 && this.resultadoImc < 30 ? 'Acima do peso' :
               this.resultadoImc >=30 && this.resultadoImc < 40 ? 'Obeso' :
               'Obesidade grave';
    }
}

//Instâncias:
const Jose = new Imc ('José', 100, 1.75);
console.log(Jose);

