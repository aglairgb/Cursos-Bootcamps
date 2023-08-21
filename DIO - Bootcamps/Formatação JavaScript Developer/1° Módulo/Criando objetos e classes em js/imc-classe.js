// classe - definição
class imc {
    peso;
    altura;

    calculoImc() {
        console.log( "IMC = " +  (this.peso/(this.altura*this.altura)).toFixed(2))
    }
}

//instância - ocorrência
const Vittorya = new imc();
Vittorya.peso = 51;
Vittorya.altura = 1.56;

const Tadeu = new imc();
Tadeu.peso = 98;
Tadeu.altura = 1.78;

//chama
Tadeu.calculoImc();
Vittorya.calculoImc();


