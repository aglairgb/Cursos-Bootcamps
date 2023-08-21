function IMC (peso,altura) {
    const media = (peso/(altura*altura));
    return media.toFixed(1);
}

function statusImc(IMC) {
    if (IMC < 18.5) {
        return("Abaixo do peso");
    } else if (IMC >=18.5 && IMC <25) {
        return("Peso Normal");
    } else if (IMC >=25 && IMC < 30) {
        return("Acima do peso");
    } else if (IMC >=30 && IMC < 40) {
       return("Obeso");
    } else {
       return("Obesidade grave");
    }
}

let peso   = 55;
let altura = 1.56;
 
const imcResultado = (IMC(peso,altura));

console.log(imcResultado);

console.log(statusImc(imcResultado))