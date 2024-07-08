//imprimir valores aleatórios de 0 a 50.
/* const random = () => {
    return Math.floor(Math.random() * 51);
}
console.log(random()); */

//dinamicamente
const random = (max,min) => {
    const r = Math.random() * (max - min) + (min);
    return Math.floor(r);
}

//define os valores
const min = 0;
const max = 50; 

/* let rand = random(min,max); */
let rand = 10;

//[enquanto] loop vai parar ao chegar no 10
//prmeiro valida a codição, depois executa o código
while (rand !== 10) {
    rand = random(min,max);
    console.log(rand);
}

console.log('######');

//primeiro executa o código, e depois valida a condição
do {
    rand = random(min,max);
    console.log(rand);
} while (rand !== 10);