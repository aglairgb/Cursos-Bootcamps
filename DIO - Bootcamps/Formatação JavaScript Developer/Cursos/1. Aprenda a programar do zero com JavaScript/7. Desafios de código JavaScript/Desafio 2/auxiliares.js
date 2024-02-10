const entradas = [5, 3, 4, 1, 10, 11];
let i = 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports.gets = gets;
module.exports.print = print;