/* const frutas = ['Uva', 'Maça', 'Banana']; */

const pessoa = {
    Nome: 'Luiz',
    Nobrenome: 'Otávio',
    Idade: 30
};

/* for (let i = 0; i < frutas.length; i++) {
    const listaFrutas = frutas[i];
    const indexFrutas = i;
   
    console.log(`${indexFrutas} - ${listaFrutas}`)
} */


/* 
Uso com arrays
for (let i in frutas) {
    console.log(frutas[i]);
} */

for (let i in pessoa) {
    const index = i;
    const valor = pessoa[i];

    console.log(`${index}: ${valor}`);
}