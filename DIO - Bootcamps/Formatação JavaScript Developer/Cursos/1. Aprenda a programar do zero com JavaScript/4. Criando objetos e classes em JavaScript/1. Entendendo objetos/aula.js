const pessoa = {
    nome: 'Tadeu',
    idade: 10,
    //método:
    descrever: function () {
         console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
};

//chamando métodos
//pessoa.descrever();

//adicionando 
//pessoa.altura = 1.60;
//console.log(pessoa);

//deletando
//delete pessoa.idade;
//console.log(pessoa);

//outra forma de chamar:
//console.log(pessoa['idade']);

//outra forma de editar:
//pessoa['nome'] = 'teste';
//console.log(pessoa)