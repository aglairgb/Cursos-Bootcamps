// funções dentro de objetos se chamam métodos.
// this são usados em objetos. Em contextos diferentes. Se refere ao bloco.


function calcMedia () {
    return (this.notas[0] + this.notas[1])/2
}

let aluno = {
    nome: "Felipe",
    notas: [5, 9],
    media: calcMedia
    }


let aluno2 = {
    nome: "Felipe",
    notas: [3, 8],
    media: calcMedia
}


console.log(aluno.nome + aluno.media() + "\n "  + aluno2.media())





