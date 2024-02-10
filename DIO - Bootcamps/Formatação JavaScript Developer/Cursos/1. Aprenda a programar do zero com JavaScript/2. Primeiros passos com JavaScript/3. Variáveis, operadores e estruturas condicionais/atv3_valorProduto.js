/* 
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de 
etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo
adequado.

Código condição de pagamento:
- À vista no débito, recebe 10% de desconto;
- À vista no dinheiro ou pix, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%.
*/

const valorProduto = 50;
const tipoPagamento = 1;

if (tipoPagamento === 1) {
    console.log(valorProduto * (1 - 0.1));
} else if (tipoPagamento === 2) {
    console.log(valorProduto * (1 - 0.15));
} else if (tipoPagamento === 3) {
    console.log(valorProduto);
}else {
    const valorComJuros = (valorProduto * 1.10);     
    console.log(valorComJuros.toFixed(2));
}

