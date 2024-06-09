 const pessoa = {
     nome: 'Luiz',
     sobrenome: 'Miranda',
     idade: 30,
     endereco: {
         rua: 'Av Brasil',
         numero: 320,
    },
 };

//atribuição via desestruturação
const {nome, sobrenome, idade, endereco: {rua, numero}} = pessoa;

console.log(
  ` Nome: ${nome}
 Sobrenome: ${sobrenome}
 Idade: ${idade}
 Rua: ${rua}
 Número: ${numero}`
  )


/*
alterar o nome de uma variável
const { nome: teste } = pessoa;
console.log(teste)
*/

/*
extrair chave dentro de um objeto dentro de outro objeto
const { endereco: {rua}} = pessoa;
console.log(rua);
*/

/*
pode alterar o conteúdo de uma variável, para caso a principal não exista, seja subtituído por esse default.
const { nome = 'Joãozinho'} = pessoa;
console.log(nome);
*/
