/*
Dia:   06:00 -> 11:59
Tarde: 12:00 -> 17:59
Noite: 18:00 -> 05:00
*/

let numero = 18;

if(numero >= 6 && numero <12) {
    console.log('Bom dia!');
} else if(numero >=12 && numero <18) {
    console.log('Boa tarde!');
} else {
    console.log('Boa noite');
}