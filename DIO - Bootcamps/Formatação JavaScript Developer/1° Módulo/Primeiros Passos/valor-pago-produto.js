/* 
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de 
etiqueta e a escolha de condição de pagamento.
Utilize os códigos de tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o 
cálculo adequado.

Código condição de pagamento:
- À vista no Débito -> recebe 10% desconto;
- À vista no Pix -> recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%.
*/

let precoEtiqueta  = 100;
let formaPagamento = 4;

if(formaPagamento === 1) {
    console.log("R$ = " + ( precoEtiqueta - (precoEtiqueta * 0.1)) + " reais.");
} else if  (formaPagamento === 2) { 
    console.log( "R$ = " + (precoEtiqueta - (precoEtiqueta * 0.15)) + " reais.")
} else if (formaPagamento === 3) {
    console.log("R$ = " + precoEtiqueta + " reais.")
} else {
    console.log("R$ = " + (precoEtiqueta + (precoEtiqueta * 0.1)) + " reais.")
}