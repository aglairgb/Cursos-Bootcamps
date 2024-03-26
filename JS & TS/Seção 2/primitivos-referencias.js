/*
Primitivos (imutáveis): string, number, boolean, underfined,
null (bigint, symbol) - Valores copiados

Referência (mutável): array, object, function - Passado por referência
*/

//é feito apenas uma cópia => imutável
/* let A = 1;
let B = A; 
console.log(A,B);
B = 5;
console.log(A,B); */

//é linkado o valor de B com A => mutável
//para ser uma cópia, usa Array [...A] Obj {...A}
let A = [1,2,3];
let B = A;
console.log(A,B);
B.push('teste');
console.log(A,B);
