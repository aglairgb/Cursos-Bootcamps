/*
Closures - habilidade que sua função tem de acessar seu escopo léxico.
*/

function retornaFuncao(nome){
    return function () {
        return nome;
    }
}

const funcao = retornaFuncao('João');
const funcao2 = retornaFuncao('Luiz');

console.log(funcao());
console.log(funcao2());