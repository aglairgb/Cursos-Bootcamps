const data = new Date();
const diaNumero = data.getDay(); //[0,1,2] = domingo, segunda, terça...
const diaTexto = converterDiaParaTexto(diaNumero);

function converterDiaParaTexto(diaNumero) {
    switch (diaNumero) {
        case 0:
            return 'Domingo';
        case 1:
            return 'Segunda-Feira';
        case 2:
            return 'Terça-Feira';
        case 3:
            return 'Quarta-Feira';
        case 4:
            return 'Quinta-Feira';
        case 5:
            return 'Sexta';
        case 6:
            return 'Sábado';
        default:
            return 'erro';
    }
}

const mesNumero = data.getMonth() + 1;
const mesTexto = converterMesParaTexto(mesNumero);
const hora = zeroEsquerda(data.getHours());
const minuto = zeroEsquerda(data.getMinutes());


function converterMesParaTexto(mesNumero) {
    switch (mesNumero) {
        case 0:
            return 'Dezembro';
        case 1:
            return 'Janeiro';
        case 2:
            return 'Fevereiro';
        case 3:
            return 'Março';
        case 4:
            return 'Abril';
        case 5:
            return 'Maio';
        case 6:
            return 'Junho';
        case 7:
            return 'Julho';
        case 8:
            return 'Agosto';
        case 9:
            return 'Setembro';
        case 10:
            return 'Outubro';
        case 11:
            return 'Novembro';
        default:
            return 'erro';
    }
}

function zeroEsquerda(num) {
    return num < 10 ? `0${num}` : num;
}

const corpoPagina = document.getElementById('texto');
corpoPagina.innerHTML =  `${diaTexto}, ${zeroEsquerda(data.getDate())} de ${mesTexto} de ${data.getFullYear() 
} <br> ${hora}:${minuto}`;




