// não há necessiade de criar propriedade e valor na ocorrênia utilizando o constructor
//classe - definição

// orientação a objetos -> criars definições de objetos, contratos de como precisa ser um objeto e 
// instâncias seguindo como precisa ser o contrato e criando novas ocorrências de pessoas nesse caso -
// ocorrências de objetos.


class pessoa {
    nome;
    idade;
    anoNascimento;

    constructor(nome,idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2022 - idade;
    }

    descrever(){
        console.log("Nome: " + this.nome + ", Idade: " + this.idade + " anos," + " Nascimento = " + this.anoNascimento);  //método
    }
}

//Intância - Ocorrência  

const pessoa1 = new pessoa("Vittorya", 21);
const pessoa2 = new pessoa("Tadeu", 54);


pessoa1.descrever();
pessoa2.descrever();

