/*
Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - O preço do combustível.
2 - Gasto médio de combustível do carro por KM.
3 - Distância em KM da viagem.

Imprima no console o valor que será gasto para realizar esta viagem.
*/

const valorCombustivel = 5.79;
const kmPorLitro = 12;
const distanciaViagemKm = 1580;

const litrosConsumidos = distanciaViagemKm/kmPorLitro;
const valorGasto = litrosConsumidos * valorCombustivel;

console.log(valorGasto.toFixed(2));

