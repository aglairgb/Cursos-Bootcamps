//funções executam ações

function soma(a,b) {
    let calculosoma = (a+b);
    console.log(`${a} + ${b} = ${calculosoma} `);
}

soma(7,7);
soma(4,5);
soma(10,4);
soma(30,5);

/*
Com apenas uma linha de function pode-se
tirar as {} e a palavra return
Com apenas um parâmetro, pode tirar os ()

arrow function (forma reduzida de fazer function)
= retira a palavra function e após () usa =>
*/

const saudacao = n => `Bom dia, ${n}!`;

console.log(saudacao('Vittorya'));
console.log(saudacao('João'));
console.log(saudacao('Laura'));