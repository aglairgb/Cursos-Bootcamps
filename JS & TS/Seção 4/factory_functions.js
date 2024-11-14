// functions que retornam objetos (função fábrica)

function criarPessoa(nome, sobrenome, peso, altura) {
    return {
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },
        // a diferença do setter é que ele permite redefinição de valores
        set nomeCompleto(valor){
            // split retorna um vetor/array e divide o conteúdo em partes que vc define
            valor = valor.split(' ');
            // shift remove e retorna o primeiro item de uma array
            this.nome = valor.shift();
            // join converte um array em uma string e divide em partes que vc define
            this.sobrenome = valor.join(' ');  
        },
        fala(assunto){
            return `${nome} ${sobrenome} está falando sobre ${assunto}.`;
        },
        peso,
        altura,
        //Getter faz com que uma function 'finja' que é um atributo, e este valor não pode ser redefinido
        get imc(){
            const indice = peso / (altura ** 2);
            return indice.toFixed(2);
        },
    };
};

const p1 = criarPessoa('João', 'Ferreira', 55, 1.56);
const p2 = criarPessoa('Maria', 'Freiras', 51, 1.70);
const p3 = criarPessoa('Marcos', 'Almeida', 80, 1.80);
const p4 = criarPessoa('Felipe', 'Chagas', 98, 1.86);
const p5 = criarPessoa('Paulo', 'Henrique', 76, 1.86);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);
console.log(p4.imc);
console.log(p5.imc);

/* p1.nomeCompleto = 'Rebeca Soares Araújo';
console.log(p1.nomeCompleto); */