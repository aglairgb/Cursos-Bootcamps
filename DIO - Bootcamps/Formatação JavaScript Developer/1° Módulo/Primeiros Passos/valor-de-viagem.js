/* 
Faça um programa para calcular o valor de uma viagem

Você terá 3 variáveis. Sendo elas:
1 - Preço do combustível;
2 - Gasto médio de combustivel por KM;  
3 - Distância de KM de viagem

Imprima no console o valor que será gasto para realizar essa viagem.
*/

const precoCombustivel = 5.79;
const kmPorLitro = 10;  //em 1l -> 10km
const distanciaKm = 100;

const litrosConsumidos =  distanciaKm/kmPorLitro;
const valorGasto = (litrosConsumidos * precoCombustivel);

console.log("Litros Consumidos = " + litrosConsumidos + "L");
console.log("Valor Final R$ = " + valorGasto.toFixed(0) + " Reais");


