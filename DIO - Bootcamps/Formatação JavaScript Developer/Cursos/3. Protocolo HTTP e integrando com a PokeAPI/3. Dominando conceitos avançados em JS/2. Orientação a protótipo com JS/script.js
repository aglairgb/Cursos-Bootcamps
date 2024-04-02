/*
Protótipo é o mecanismo pelo qual objetos javascript herdam
recursos uns dos outros.
*/

//exemplo I
const renan = {
    nome: 'Renan'
}

renan.__proto__ = {
    idade: 30
}

console.group(renan.idade)

//exemplo II
const pessoa = {
    idade: 18
}

const renan = {
    nome: 'Renan',
    idade: 30,
    __proto__: pessoa
}

console.log(renan.idade)
