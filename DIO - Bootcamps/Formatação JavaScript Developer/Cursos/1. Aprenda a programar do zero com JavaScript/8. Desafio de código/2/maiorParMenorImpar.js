/*
Desafio
Faça um programa que receba N (quantidade de números) e seus respectivos valores. Imprima o maior
número par e o menor número impar. 

Entrada
A entrada consiste em um arquivos de teste, a primeira linha receberá um valor N, referente
quantidade de números que terá de entranda, as linhas seguintes terão os valores númericos maiores
ou iguais a zero, podendo o número ser par ou impar. Conforme mostrado no exemplo de entrada a seguir.

Saída
Para cada arquivo da entrada, terá um arquivo de saída. E como mencionado no Desafio, a saída deverá
retornar a mensagem "Maior número par: {numero}" com o maior valor par após o final do texto,  e "Menor
número ímpar: {numero}" com o menor valor ímpar após o final do texto. Use o exemplo abaixo para clarear
o que está sendo pedido.

Exemplos de entrada [5,3,4,1,10,8]
Exemplo de saída [Maior número par: 10 
                  Menor número impar: 1]
*/

const N = gets();
let maiorNumeroPar = 0;
let menorNumeroImpar = 1;

for (let i = 0; i < N; i++) {
  const numero = parseInt(gets());

  if (numero % 2 == 0) {
    if (numero > maiorNumeroPar) {
      maiorNumeroPar = numero;
    } else {
        if(numero < menorNumeroImpar) {
           menorNumeroImpar = numero;
        }
    }
  }

}

print(`Maior número par: ${maiorNumeroPar}`);
print(`Menor número impar: ${menorNumeroImpar}`);