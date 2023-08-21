/* 
Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade
calcule e imprima sua média e sua classificação conforme a tabela abaixo:

media = (nota1 + nota2 + nota3) / 3

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre.

*/

let nota1 = 7;
let nota2 = 7;
let nota3 = 7;

media = ((nota1 + nota2 + nota3) / 3).toFixed(0)
console.log(media)

if(media<5) {
    console.log("Reprovação")
} else if(media >=5 && media <=7) {
    console.log("Recuperação")
} else {
    console.log("Passou de semestre")
};


