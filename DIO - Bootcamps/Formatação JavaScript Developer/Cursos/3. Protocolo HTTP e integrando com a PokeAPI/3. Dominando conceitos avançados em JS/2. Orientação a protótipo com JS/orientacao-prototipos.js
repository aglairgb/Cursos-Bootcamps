// Orientação a protótipos

const pessoa = {
    genero: 'feminino',
}

const laura = {
    nome: 'laura',
    idade: 30,
    __proto__: pessoa  // herda pessoa
}

console.log(laura.genero);
