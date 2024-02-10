function meuNome (nome) {
    return 'Meu nome é ' + nome;
}

function maiorIdade(idade) {
    return idade >=18 ? 'maior de idade.' : 'menor de idade.';  //operador ternário. 
}

console.log(meuNome('Tadeu, ' + 'sou ' + maiorIdade(20)));

