// Nome do aluno - nota 1 - nota 2 - média - Aprovado/Reprovado

// let aluno = prompt("Qual o seu nome?");

// let nota1 = parseInt(prompt("Digite sua primeira nota"));

// let nota2 = parseInt(prompt("Digite sua segunda nota"));

// let media = (nota1+nota2)/2
// //

// if (media>=7) {
//     alert("Aluno (a) =  " + aluno + "\nPrimeira Nota = " + nota1  + " \nSegunda Nota = " + nota2 + " \nMédia = " + media + " \nSituação = Aprovado")
// } else {
//     alert("Aluno (a) =  " + aluno + "\nPrimeira Nota = " + nota1  + " \nSegunda Nota = " + nota2 + " \nMédia = " + media + " \nSituação = Reprovado")
// }

// console

let nomes =  ["Carlos", "Isa", "Felipe", "Pedro"];
let notasA = [7.6, 8.0, 6.0, 9.0];
let notasB = [10.0, 5.7, 8.5, 8.0];

function media (n1,n2) {
    return ((n1+n2)/2).toFixed(1);
}

function aprovado (m) {
    return m >=7 ? "aprovado" : "reprovado";
}

for (let i in nomes) {
    let mediaAlunos = media(notasA[i], notasB[i])
    let situacao = aprovado(mediaAlunos)

     console.log(
        nomes[i]  + " - " +
        notasA[i] + " - " +
        notasB[i] + " - " +
        mediaAlunos + " - " +
        situacao
     )
}



