const nome = "Vittorya";
const altura = 1.56;
const peso = 46;


const IMC = peso / (altura * altura)

console.log(`O IMC de ${nome} é ${IMC.toFixed(1)}`);

if (IMC<18.5) {
    console.log("Abaixo do peso");
} else if (IMC >=18.5 && IMC <25) {
    console.log("Peso normal");
} else if (IMC >=25 && IMC <30) {
    console.log("Acima do peso");
} else if(IMC >=30 && IMC <=40) {
    console.log("Obeso");
} else {
    console.log("Obesidade grave");
}



