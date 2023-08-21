// let precoEtiqueta  = 100;
// let formaPagamento = 4;

// if(formaPagamento === 1) {
//     console.log("R$ = " + ( precoEtiqueta - (precoEtiqueta * 0.1)) + " reais.");
// } else if  (formaPagamento === 2) { 
//     console.log( "R$ = " + (precoEtiqueta - (precoEtiqueta * 0.15)) + " reais.")
// } else if (formaPagamento === 3) {
//     console.log("R$ = " + precoEtiqueta + " reais.")
// } else {
//     console.log("R$ = " + (precoEtiqueta + (precoEtiqueta * 0.1)) + " reais.")
// }

function ValorFinal (etiqueta, pagamento) {
    return pagamento === 1 ? (etiqueta - (etiqueta * 0.1))  :
           pagamento === 2 ? (etiqueta - (etiqueta * 0.15)) :
           pagamento === 3 ? etiqueta :
           etiqueta + (etiqueta * 0.1);
}

console.log(ValorFinal(100,4))



  