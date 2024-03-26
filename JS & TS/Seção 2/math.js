//Arredonda para baixo:
let num = 4.4343;
let numConvertido = Math.floor(num);
console.log('Arredondado para baixo = ' + numConvertido);

//Arredonda para cima:
let num1 =  4.4343;
let num1Convertido = Math.ceil(num1);
console.log('Arredondado para cima = ' + num1Convertido);

//round() arredonda para o mais próximo
//max() identifica o maior número de uma lista
//min() identifica o menor número de uma lista
//random() gera número aleatório
//Math.sqrt() gera raiz quadrada de um número
//núemero aleatório entre 1-79
let aleatorio = Math.round(Math.random() * (1 - 79) + 79);
console.log('Número aleatório = ' + aleatorio);

//valor de PI
console.log('Valor de PI = ' + Math.PI);

//Potência:
console.log('Potência 4³ = ' +  Math.pow(4,3));
//Forma alternativa:
console.log('Alternativa com ”**” = ' + 4**3);