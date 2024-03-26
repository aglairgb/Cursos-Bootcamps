let numero = prompt('Digite um número:');
numero = Number(numero);


let titulo = document.getElementById('h1');
titulo.innerText = `Seu número é: ${numero}`;

let texto = document.getElementById('texto');

texto.innerHTML = 
`
Raiz quadrada: ${Math.sqrt(numero)}<p>
O número ${numero} é inteiro: ${Number.isInteger(numero)} <p>
É NAN: ${Number.isNaN(numero)}<p>
Arredondado para baixo: ${Math.floor(numero)} <p>
Arredondado para cima: ${Math.ceil(numero)}<p>
Com duas casa decimais: ${numero.toFixed(2)}<p>
`
