//Função construtora retorna objetos
//Inicia com letra maíuscula e usa new
//Usa-se ';' diferente da factory function

function Pessoa (nome, sobrenome) {
   //Atributos ou métodos privados
   const ID = 123456;
   const metodoInterno = () => {

   };
   //Atributos ou métodos públicos
   this.nome = nome;
   this.sobrenome = sobrenome;
   this.metodo = () => {
   console.log(`${nome} ${sobrenome}`);
   };
};

const p1 = new Pessoa('Luiz', 'Otávio');
const p2 = new Pessoa('João', 'Freitas');
p2.metodo();