// objeto = colecação dinâmica de chave e valor;
// métodos = functions dentro de objetos;
// this = Diz respeito ao contexto onde essa função está sendo executada;
// variáveis dentro de uma classe/obejto são atributos;


const info = {          //objeto
    nome: "Vittorya",   //chaves e valores
    idade: "21",
    descrever() {
        console.log("Meu nome é " + this.nome + "\nTenho " + this.idade + " anos");  //método
    }
};
console.log(info)


// nome-objeto.altura = 1.56;  incrementando nova variável.
// delete nome-do-objeto.idade;   apaga variável idade.


