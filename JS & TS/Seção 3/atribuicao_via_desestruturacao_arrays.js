/*
Exemplo 1

let a = 'A';  //B
let b = 'B';  //C
let c = 'C';  //A

//atribuição via destruturação
const letras = [b,c,a];
[a,b,c] = letras;

console.log(a,b,c);
*/

/*
0  1  2  3  4  5  6  7  8
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let [...resto] = numeros;

console.log(resto);
*/

//                    0          1          2
//                 0  1  2    0  1  2    0  1  2
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];

let [[um, dois, tres], [quatro, cinco, seis], [sete, oito, nove]] = numeros;

console.log(nove);