/* 
3) Faça um programa que calcule e imprima o salário a ser transferido para um funcionário.
Para realizar o cálculo receba o valor bruto do salário e o adicional dos benefícios.
O salário a ser transferido é calculado da seguinte maneira:

  valor bruto do salario - percentual de imposto mediante a faixa salarial +
  adicional de benefícios

Para calcular o percentual de imposto segue as aliquotas:
  De R$ 0.00 a R$ 1100.00 = 5.00%
  De R$ 1100.01  a R$ 2500.00 = 10.00%
  Maior que R$ 2500 = 15.00%

  Exemplo:
    Entrada: 
      2000
      250
    Saída:
      2050.00
*/

const { gets, print } = require('./funcoes-auxiliares');


function calcularSalarioTransferido(valorSalarioBruto, adicionalBeneficios) {
    let percentualImposto;
    
    if (valorSalarioBruto <= 1100) {
        percentualImposto = 0.05;
    } else if (valorSalarioBruto <= 2500) {
        percentualImposto = 0.1;
    } else {
        percentualImposto = 0.15;
    }
    

    const valorImposto = valorSalarioBruto * percentualImposto;
  
    const salarioTransferido = valorSalarioBruto - valorImposto + adicionalBeneficios;
    
    return salarioTransferido.toFixed(2); 
}


const valorSalarioBruto = gets();
const adicionalBeneficios = gets();

const salarioTransferido = calcularSalarioTransferido(valorSalarioBruto, adicionalBeneficios);
print(salarioTransferido);
