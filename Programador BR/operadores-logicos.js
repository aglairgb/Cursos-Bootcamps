// && e
// || ou
// Negativo

// let a = true;
// let b = false;

// let c = a && b;
// console.log(c)

//ambas verdadeiro retorna verdadeiro. tudo diferente disso retorna falso.

// se tiver menos de 10 anos ou mais que 65 entrada gratuita
// novo critério: se trouxer 1kg de alimento tá liberado

function entradaFree ([idade, alimento]) {
    return idade <10 || idade >65 || alimento == true ?  "Entrada gratuita" :
    "Não há direito a entrada gratuita";
};

console.log(entradaFree([16, true]));

// let idade = 15;

// let maior20 = idade >=20;
// let menor20 = !maior20;  //negação

// console.log(menor20)


