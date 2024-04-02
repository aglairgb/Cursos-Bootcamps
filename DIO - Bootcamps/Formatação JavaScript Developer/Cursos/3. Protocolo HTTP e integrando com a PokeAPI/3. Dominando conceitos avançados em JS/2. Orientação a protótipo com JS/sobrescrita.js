const Pessoa = {
    idade: 18,
}

const renan = {
    nome: 'renan',
    idade: 20,
    __proto__: Pessoa,
}

console.log(renan.idade)

/*
Vai imprimir quem encontrar primeiro,
caso não tenha no const renan, irá buscar 
em const Pessoa.
*/