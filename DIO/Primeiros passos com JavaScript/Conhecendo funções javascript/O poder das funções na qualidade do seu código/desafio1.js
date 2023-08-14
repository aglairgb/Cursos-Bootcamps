/*
2) O IMC - Indice de Massa Corporal é uma critério de organização mundial de saúde para
dar uma indicação sobre a condiçao de peso de uma pessoa adulta.

Formúla do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto e mostre sua condição
de acordo com a tabela abaixo:

IMC em adultos - condiçao:
- Abaixo de 18.5 (abaixo do peso)
- Entre 18.5 e 25 (peso normal)
- Entre 25 e 30 (acima do peso)
- Entre 30 e 40 (obeso)
- Acima de 40 (obesidade grave)

*/

function calcularIMC (peso,altura) {
   return  calcularIMC = peso / (altura * altura);
}


function classificarIMC (imc) {

    if (imc < 18.5) {
        return ("Abaixo do peso");
    } else if (imc >= 18.5 && imc < 25) {
      return ("Peso normal");
    } else if (imc >= 25 && imc < 30) {
       return ("Acima do peso");
    } else if (imc >= 30 && imc <=40) {
        return ("Obeso");
    } else {
       return("Obesidade grave");
    }
    

}

(function main () {
    let imc = calcularIMC(45, 1.56).toFixed(1);
    
    console.log(imc);
    console.log(classificarIMC(imc));  
})()




