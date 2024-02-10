/* 
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem.

Imprima no console o valor que será gasto para realizar esta viagem.
*/

const etanol =  3.42;
const gasolina = 5.58;
const tipoCombustivel = 1;
const kmPorLitro = 10;
const distanciaViagemKm = 100;


const gastoLitro = distanciaViagemKm/kmPorLitro;
const totalGasolina = gastoLitro * gasolina;
const totalEtanol = gastoLitro * etanol;    

if (tipoCombustivel == 1) {
    console.log('Gasolina = ' + totalGasolina);
} else {
    console.log('Etanol = ' + totalEtanol);
}