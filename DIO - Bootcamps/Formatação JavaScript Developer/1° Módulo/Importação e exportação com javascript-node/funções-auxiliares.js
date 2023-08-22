const entradas = [5,50,10,98,23];
let i = 0;

//input
function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

//console.log
function print(texto) {
   console.log(texto);
}


module.exports = {gets,print};
// module para exportar aquivos