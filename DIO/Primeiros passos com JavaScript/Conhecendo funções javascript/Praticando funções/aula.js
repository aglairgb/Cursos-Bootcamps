/*
//Faça uma função que diga seu nome
function sayMyName (name) {
    console.log("Meu nome é " + name);
}
  
sayMyName("Vittorya")  */

/*
//Faça uma função que diga se você é maior de idade

function verificarIdade(idade) {
    if (idade >=18) {
        console.log("Maior de idade");
    } else {
        console.log("Menor de idade");
    }
}

verificarIdade(17)   */

/*


Exercício dos juros, resolvendo com functions.

 Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de 
etiqueta e a escolha de condição de pagamento.

Utilize os códigos da tabela a seguir para ler qual a condição escolhida a efetuar o cálculo adequado.

Código condição de pagamento:
1 - À vista Débito, recebe 10% desconto;
2 - À vista no dinheiro ou pix, recebe 15% desconto;
3 - Em duas vezes, preço normal de etiqueta sem juros;
4 - Acima de duas vezes, preço normal da etiqueta, mais juros de 10%. */


function aplicarDesconto (valor, desconto) {
    return valor - (valor * (desconto/100));
}

function aplicarJuros (valor, juros) {
    return valor + (valor * (juros/100));
}


    const precoEtiqueta = 100;
    const formaDePagamento = 1;



if (formaDePagamento === 1) {
    console.log (aplicarDesconto(precoEtiqueta, 10))
} else if (formaDePagamento == 2 ) {
    console.log(aplicarDesconto(precoEtiqueta, 15))
} else if (formaDePagamento === 3) {
    console.log(precoEtiqueta);
} else {
    console.log(aplicarJuros(precoEtiqueta,10));
}



