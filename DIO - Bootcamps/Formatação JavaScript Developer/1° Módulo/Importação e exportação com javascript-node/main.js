//require - no node para importar arquivos 

// const funcoes = require ("./funções-auxiliares")

// console.log(funcoes.gets())    //primeira forma 



const {gets, print} = require ("./funções-auxiliares");

const notas = gets();
let maiorValorEncontrado = 0;

for (let i = 0; i < notas; i++) {
   const numeroSorteado = gets();

   if(numeroSorteado > maiorValorEncontrado) {
      maiorValorEncontrado = numeroSorteado;
   }
}

print(maiorValorEncontrado);