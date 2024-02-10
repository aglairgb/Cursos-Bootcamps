/*
2) Faça um programa que receba N (quantidade de números) e seus respectivos valores.
Imprima o maior numero par e o menor número ímpar.

Exemplo:
  Entrada:
    5
    3
    4
    1
    10
    8

  Saída:
    Maior número par: 10
    Menor número ímpar: 1
*/

const { gets, print } = require('./auxiliares');

const n = gets();

let maiorNumeroPar = null; //não sabemos o valor
let menorNumeroImpar = null;

for (let i = 0; i < n; i++) {  
  const numero = gets();
  
  if(numero % 2 == 0) {
    if(maiorNumeroPar == null || numero > maiorNumeroPar) {             //if encadeado
      maiorNumeroPar = numero; 
    } 
  } else {
     if (menorNumeroImpar === null || numero < menorNumeroImpar ) {
      menorNumeroImpar = numero;
     }
  }
}

print(maiorNumeroPar);
print(menorNumeroImpar);








