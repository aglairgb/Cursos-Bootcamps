/* 
Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por kilômetro rodado. Crie um método
que dado a quantiade de quilometros e o preço do combustível nos dê o valor gasto em rais para realizar
este percurso.

*/

// .this é para quando vc quer se referenciar ao um atributo.

class Carros {
    marca;
    cor;
    litroPorKm;

    constructor (marca, cor, litroPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.litroPorKm = litroPorKm;
    }

    calcularViagem(distanciaKm, valorGasolia){
         return "R$ = " + (distanciaKm * this.litroPorKm * valorGasolia).toFixed(2) + " reias.";
    }
}

const uno = new Carros("Fiat", "Amarelo", 1/12); // em 1km faz 0.83l

const palio = new Carros("Fiat", "Vermelho", 1/10); 

console.log(palio.calcularViagem(70,5))