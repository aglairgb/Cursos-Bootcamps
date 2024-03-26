/* let n1 = prompt('Digite um número');
console.log(`Primeiro número = ${n1}`);
let n2 = prompt('Digite outro número');
console.log(`Segundo número = ${n2}`);

n1 = parseInt(n1);
n2 = parseInt(n2);

console.log(`Resultado = ${n1+n2}`); */

let varA = 'A';  //B
let varB = 'B';  //C
let varC = 'C';  //A

const varATemp = varA;
varA = varB;
varB = varC;
varC =  varATemp;

console.log(varA, varB, varC);