/* 
1) Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade, calcule e 
imprima a sua média e sua classificação conforme a tabela abaixo.

Media = (nota1 + nota2 + nota3)/3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre.
*/

const nota1 = 8;
const nota2 = 8;
const nota3 = 8;

const media = (nota1 + nota2 + nota3)/3

if (media <5 ) {
    console.log('Reprovação');
} else if (media >=5 && media <=7) {
    console.log('Recuperação');
}else {
    console.log('Passou do semestre');
} 