//continue - continua para próxima iteração
//break - sai do laço

const numeros = [1,2,3,4,5,6,7,8,9];

//continue - pula um número e continua
for (let i of numeros) {
    if (i === 3) {
        console.log('Pulei o número 3 e continuei')
        continue;
    }
    console.log(i);
};

console.log('##############################');

//break - para ao encontrar o número
for (let i of numeros) {
    console.log(i);

    if (i === 3) {
        console.log('Encontrei o número 3 e parei')
        break;
    }
};

console.log('###############################');

let i = 0;
while (i < numeros.length) {
    let numero = numeros[i];

    if(numero === 4) {
        console.log('Pulei o número 4 e continuei');
        i++;
        continue;
    }

    console.log(numero);

    if (numero === 5) {
        console.log('Encontrei o número 5 e parei');
        i++;
        break;
    }
    i++;
}

console.log('###############################');


do{
    let numero = numeros[i];

    if(numero === 7) {
        console.log('Pulei o número 7 e continuei');
        i++;
        continue;
    }

    console.log(numero);

    if (numero === 9) {
        console.log('Encontrei o número 9 e parei');
        i++;
        break;
    }
        i++;
}while (i < numeros.length);
