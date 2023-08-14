const produto = "Camisa";
const valor = 100;
const pagamento = 5;


if (pagamento === 1) {
    const descontoDebito = (valor/10);
    const valorFinal = valor - descontoDebito;
    console.log(`O desconto à ${produto}, por ter utilizado o débito foi de ${descontoDebito} reais.`);
    console.log(`O valor pago foi ${valorFinal} reais.`);

} else if (pagamento === 2 ) {
    const descontoDinheiroPix = (valor * 0.15)
    const valorFinal = valor - descontoDinheiroPix;
    console.log(`O desconto à ${produto} por ter utilizado o pix ou dinheiro foi de ${descontoDinheiroPix} reais`);
    console.log(`O valor pago foi de ${valorFinal}`);

} else if (pagamento === 3) {
        console.log(`Não há descontos na ${produto} parcelando de 2x, continua sendo ${valor} reais, porém é sem juros.`);

} else if (pagamento === 4 ) {
    const juros = valor + (valor/10);
    console.log(`Preço original de ${valor} reais, com acréscimo de 10% de juros.`);
    console.log(`O valor pago será ${juros} reais.`);
    
} else {
    console.log(`Número inválido`)
}
   


