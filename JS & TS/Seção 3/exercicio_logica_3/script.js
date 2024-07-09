/*
Escreva uma função que receba um número e 
retorne o seguinte:
Número divisível por 3 = Fizz
Número divisível por 5 = Buzz
Número divisível por 3 e 5 = FizzBuzz
Número não é divisível por 3 e 5 = Retorna o próprio número
Checar se o número é realmente um número
Use a função com números de 0 a 100
*/


const edivisivel = (n) => {
    n = n === '' ? NaN : Number(n); //se for '' retorna o erro de nan - caso contraŕio nan é transformado em number.

    return isNaN(n) ? 'Erro - Inisira um número.' :
           n % 3 === 0 && n % 5 === 0 ? 'FizzBuzz' :
           n % 3 === 0 ? 'Fizz' :
           n % 5 === 0 ? 'Buzz' :
           n;
};

for (let i = 0; i <=100; i++) {
    console.log(`${i} - ${edivisivel(i)}`);
}
