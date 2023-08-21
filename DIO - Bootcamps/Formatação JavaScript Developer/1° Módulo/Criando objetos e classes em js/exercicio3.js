
//defina status sobre situação do resultado de cada imc.

//class - definição
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
        const imcNumerico = this.peso / (this.altura *  this.altura);
        return "Nome = " + this.nome + ", IMC = " + imcNumerico;
    }


    classificarImc() {
        const imcNumerico = this.peso / (this.altura * this.altura);

        if (imcNumerico < 18.5) {
            return "Abaixo do peso";
        } else if (imcNumerico >= 18.5 && imcNumerico < 25) {
            return "Peso Normal";
        } else if (imcNumerico >= 25 && imcNumerico < 30) {
            return "Acima do peso";
        } else if (imcNumerico >= 30 && imcNumerico < 40) {
            return "Obeso";
        } else {
            return "Obesidade grave";
        }
    }
}


//instâncias - ocorrência
let p1 = new Pessoa("Vittorya", 51, 1.56);
let p2 = new Pessoa("Carlos", 60, 1.68);

//chamadas
console.log(p2.calcularImc())
console.log(p2.classificarImc())






