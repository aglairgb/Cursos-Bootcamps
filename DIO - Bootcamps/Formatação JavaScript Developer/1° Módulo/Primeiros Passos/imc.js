/* 
O IMC - Indíce de massa corporal é um certificado da organização mundial de saúde para dar uma 
indiacação sobre a condição de peso de uma pessoa adulta.

Fórmula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto, mostre sua condição de acordo
com a tebela abaixo:

IMC de adultos - Condição:

- Abaixo de 18.5 -> Abaixo do peso;
- Entre 18.5 e 25 -> Peso Normal;
- Entre 25 e 30 -> Acima do peso;
- Entre 30 e 40 -> Obeso;
- Acima de 40 - Obesidade grave.
*/

let peso = 51;  
let altura = 1.56;
let IMC = peso / (altura * altura)

console.log(IMC.toFixed(1))

if (IMC < 18.5) {
    console.log("Abaixo do peso");
} else if (IMC >=18.5 && IMC <25) {
    console.log("Peso Normal");
} else if (IMC >=25 && IMC < 30) {
    console.log("Acima do peso");
} else if (IMC >=30 && IMC < 40) {
    console.log("Obeso");
} else {
    console.log("Obesidade grave");
}


