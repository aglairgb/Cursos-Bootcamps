const notas = [5,7,8,10,5,8];

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    soma = soma + notas[i];
    media = soma/notas.length;
}

console.log(soma)
console.log(media)