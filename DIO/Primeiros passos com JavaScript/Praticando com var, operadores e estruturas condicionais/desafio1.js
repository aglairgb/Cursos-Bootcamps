const nota1 = 8;
const nota2 = 8;
const nota3 = 8;

const media = (nota1 + nota2 + nota3) / 3;

console.log(`A média do aluno(a) é ${media}`);

if (media < 5) {
    console.log("O aluno (a) está reprovado");
} else if (media >=5 && media <=7) {
    console.log("O aluno (a) está de recuperação");
} else {
    console.log("O aluno (a) está aprovado")
}