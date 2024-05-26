//const data = new Date(0); //01/01/1970 -> Timestamp ou epoca unix
//objeto date ententde milesimos

/* const quatroHoras = 60 * 60 * 4 * 1000; //4 horas em milesimos de segundos
const umdia = 60 * 60 * 24 * 1000;
const data = new Date(0 + quatroHoras + umdia)//02/01/1970
console.log(data.toString()); */


//data local
/* const dataLocal = new Date();
console.log(dataLocal.toLocaleDateString())
 */

/* const data = new Date(2024, 10, 3, 11, 30); //ano, mes, dia, hora, minuto, segundo, milesimo
console.log(data.toString()); */

/* const data = new Date('2024-05-25 21:21');
console.log(data.toString()); */

/* const data = new Date();
const dia = data.getDate();       
const mes = data.getMonth() + 1;  //add +1 pois inicia com 0
const ano = data.getFullYear();   
const diaSemana = data.getDay();  

console.log(` dia = ${dia} \n mes = ${mes} \n ano = ${ano} \n diaSemana = ${diaSemana}`); */

/* console.log(Date.now()); //data de hoje em milesimos de segundos */


//Formatar horario no padrao brasileiro:
function zeroEsquerda(num){
    return num >=10 ? num : `0${num}`;
}

function dataBrasil(data) {
    const dia =  zeroEsquerda(data.getDate());
    const mes = zeroEsquerda(data.getMonth() +1);
    const ano = zeroEsquerda(data.getFullYear());
    const hora = zeroEsquerda(data.getHours());
    const min = zeroEsquerda(data.getMinutes());
    const sec = zeroEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${sec}`;
}

const data = new Date();
const formatarData = dataBrasil(data);
console.log(formatarData);