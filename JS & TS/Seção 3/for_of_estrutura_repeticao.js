/* const nome = ['Luiz', 'Otávio', 'Jorge', 'Carla', 'Pablo', 'Jack', 'Maria']; */

//For clásico - Geralmente usado com iteráveis (arrays, strings)
/* for (let i = 0; i < nome.length; i++) {
    console.log(nome[i]);
} */

//For in - Retorna o índice ou chave (arrays, strings, objetos)
/* for (let i in nome) {
    console.log(nome[i]);
} */

//For of - Retorna o valor em si (iteráveis - arrays, strings)
  /* for (let i of nome) {
        console.log(i);
    }  */ 

/* nome.forEach((valor,index,array) => {
    console.log(`${index} - ${valor}`);
}) */


//objetos
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
};

for (let chave in pessoa) {
    const valor = pessoa[chave];

    console.log(`${chave}: '${valor}',`);
}






