/* function* geradora1 () {
    //Código qualquer
    yield 'Valor 1';
    //Código qualquer
    yield 'Valor 2';
    //Código qualquer
    yield 'Valor 3';
}

const g1 = geradora1();
for (let valor of g1) {
    console.log(valor);
} */

//Gerador infnito
/* function* geradora2 () {
    let i = 1;

    while(true) {
        yield i;
        i++;
    };
;}

const g2 = geradora2();
// 1, 2, 3, 4, 5, 6
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value); */
//

//Delegar parte dos valores para outra função
function* geradora3 () {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4 () {
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

//Retornando funcções
function* geradora5 () {
    yield () => {
        console.log('Exemplo de função 1');
    };

    yield () => {
        console.log('Exemplo de função 2');
    };
};

const g5 = geradora5();
const funcao1 = g5.next().value;
const funcao2 = g5.next().value;

funcao1();
funcao2();