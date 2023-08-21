/* 
Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1- Preço Etanol;
2- Preço Gasolina;
3- O tipo de combustível que está no seu carro;
4- Gasto médio de combustível do carro por KM;
5- Distância de KM da viagem;

Imprima no console o valor que será gasto para realizar essa viagem.
*/
const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitro = 10;  //em 1l -> 10km
const distanciaKm = 100;
const tipoCombustivel = "Etanol";

const litrosConsumidos =  distanciaKm/kmPorLitro;

if (tipoCombustivel === "Etanol") {
    const valorGasto = (litrosConsumidos * precoEtanol);
    console.log("Valor Final R$ = " + valorGasto.toFixed(0) + " Reais");

} else {
    const valorGasto = (litrosConsumidos * precoGasolina);
    console.log("Valor Final R$ = " + valorGasto.toFixed(0) + " Reais");

}


