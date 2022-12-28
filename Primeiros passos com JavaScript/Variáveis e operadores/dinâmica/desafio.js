//entrada

const combustivel = 5.79;   //valor do combustível
const kmporlitro = 12;   // cada km o gasto é de 10l
const distanciaKm = 1566; // distância de 100km

//saida

const litrosConsumidos = distanciaKm / kmporlitro    //10L consumidos na viagem

console.log(`A quantidade de litros consumidas nesta viagem foi de ${litrosConsumidos} litros.`)

const valorGasto = litrosConsumidos * combustivel;

console.log(`O valor gasto na corrida foi de ${valorGasto.toFixed(0)} reais.`);  

// exemplo.toFixed() arredonda o valor para a quantidade de decimais q por entre parênteses.



