/* function pessoas (nome, sobrenome) {
    return {nome, sobrenome};
}
const p1 = pessoas('Luiz', 'Antonio');
console.log(typeof p1); */

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' '  + resto;
    }
    return falaResto;
}

const fala = falaFrase('Olá');
const resto = fala('mundo');
console.log(resto);