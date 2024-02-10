/*
1) Faça um programa que receba a média de um aluno.
Caso a média seja < 5 imprima 'Reprovado'
Caso a média seja >= 5 e < 7 imprima 'Recuperação'
Caso a média seja >=7 imprima 'Aprovado'

Exemplo:
 Entrada
   5.5
 Saída
   Recuperação
*/

const {gets, print} = require('./auxiliares');

const media = gets();

function resultado (media) {
    return media < 5 ? 'Reprovado' :
           media >= 5 && media < 7 ? 'Recuperação' :
           'Aprovado';
}
console.log(resultado(media));
