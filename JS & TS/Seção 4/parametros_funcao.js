/* function funcao(){
    let total = 0;
    for(let argumento of arguments){
        total += argumento;
    }

    console.log(total);
}

funcao(1,2,3,4,5,6,7,8,9); */

/* function funcao(a=10,b=10,c=10){
    console.log(a,b,c);
}
//pra chamar o valor padrão, usa undefined
funcao(1,undefined,3); */

/* //atribuição via desestruturação
function funcao([valor1, valor2, valor3]){
    console.log(`Nome: ${valor1} 
Sobrenome: ${valor2}
Idade: ${valor3}\n`);
}
funcao(['Leandro', 'Chagas', 40]);
funcao(['Jorge', 'Almeida', 50]);
funcao(['Amanda', 'Pereira', 20]); */

function conta(operador, acumulador, ...numeros){
    for (let numero of numeros) {
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '*') acumulador *= numero;
        if(operador === '/') acumulador /= numero;
    }

    console.log(acumulador)
}
conta('+', 1, 20, 30, 40, 50);

//arguments e hoisting não funcionam em arrow functions.