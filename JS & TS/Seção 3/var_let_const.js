const verdadeiro = true;

//Let tem escopo de bloco  {...bloco}
//Var só tem escopo de função

let nome = 'Luiz';
var nome2 = 'Luiz';

if(verdadeiro) {
    let nome = 'Otávio';        //criando
    var nome2 = 'Rogério';      //redeclarando

if (verdadeiro) {
    var nome2 = 'Ronaldo';      //redeclarando
    let nome = 'Outra coisa';   //criando
}
}

console.log(nome, nome2);


/*
hoisting eleva as variáveis (var) para o topo -> quando chamadas após o console,
trazendo o valor underfined. isso ocorre pq ele eleva o 'var' para o topo, mas não o seu valor. 
em functions, funciona somente se usar a palavra reservada function, caso coloque dentro
de uma variável ou use arrow function, o hoisting não irá ocorrer.
*/



