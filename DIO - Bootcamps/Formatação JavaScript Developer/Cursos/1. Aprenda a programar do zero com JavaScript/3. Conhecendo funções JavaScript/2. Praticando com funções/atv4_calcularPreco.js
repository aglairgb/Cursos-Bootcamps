function main () {
    const valorProduto  = 50;
    const tipoPagamento = 4;

    console.log(valorFinal(valorProduto,tipoPagamento));
}


function valorFinal(valorProduto, tipoPagamento) {
    return tipoPagamento === 1 ? (valorProduto * (1 - 0.1))  :
           tipoPagamento === 2 ? (valorProduto * (1 - 0.15)) :
           tipoPagamento === 3 ? valorProduto:
           (valorProduto * (1 + 0.10)).toFixed(2);
}

main();

