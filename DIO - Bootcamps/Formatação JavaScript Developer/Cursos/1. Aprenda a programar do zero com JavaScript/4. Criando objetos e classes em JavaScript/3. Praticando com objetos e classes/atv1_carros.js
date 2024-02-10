/*
1 - Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por kilômetro rodado.
Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor gasto
em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    kmPorLitro; //quantos km seu carro faz um litro.
    kmViagem;   //km total da viagem
    valorCombustivel;

    constructor (marca, cor, kmPorLitro, kmViagem, valorCombustivel) {
        this.marca = marca;
        this.cor = cor;
        this.kmPorLitro = kmPorLitro;
        this.kmViagem = kmViagem;
        this.valorCombustivel = valorCombustivel;
        this.valorFinal = this.calcularValorViagem(); 
    }

    calcularValorViagem(){
        const litroViagem = this.kmViagem / this.kmPorLitro;
        return litroViagem * this.valorCombustivel;
    }

}

//Instâncias:
const uno = new Carro ('Fiat', 'Amarelo', 10, 100, 5);
console.log(uno);



