/* 
1) Uma sala contém 5 alunos e para cada aluno foi sorteado um número
de 1 - 100.
Faça um programa que receba os 5 números sorteados para os alunos e mostre
o maior número sorteado.

Dados de entrada:
[5, 50, 10, 98, 23]

Saída
[98]
*/

const {gets, print} = require ('./auxiliares')

const quantidadeNumeros = gets();
let maiorValor = 0;

for (let i = 0; i < quantidadeNumeros; i++) {
    const numeroSorteado = gets(); 
    
    if(numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado;
    }
}

print(maiorValor);


