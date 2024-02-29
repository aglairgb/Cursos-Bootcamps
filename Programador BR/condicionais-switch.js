let nota1 = 10;
let nota2 = 1;
let media = (nota1+nota2)/2

console.log(media >=7 ? "Aprovado" : "Reprovado")

let conceito = "";

media >=8 ? conceito = "Ótimo" :
media >= 6.5 ? conceito = "Bom" :
conceito = "Regular";

console.log("Média = " + media)
console.log(conceito)

switch (conceito) {
    case "Ótimo" :
      break
    case "Bom" :
        console.log("Você foi bem");
        break
    case "Regular" :
        console.log("Estude mais")
        break
 
    default : console.log("Algo deu errado");
}


/*
O switch é uma forma mais organizada e legível de lidar com várias opções em 
comparação com uma série de declarações if-else. Ele torna o código mais claro e 
facilita a manutenção, especialmente quando há muitos casos diferentes para tratar.

No Switch não se faz comparações.
*/