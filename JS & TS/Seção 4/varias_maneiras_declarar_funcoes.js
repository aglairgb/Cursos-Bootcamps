/*
Declaração de função (hoisting)
-> ocorre ao elevar as declarações ao topo.
*/
faleOi();
function faleOi(){
    console.log('Oi!');
}

/*
First class objects (Objetos de primeira classe)
Function expression
*/
const souUmDado = function(){
    console.log('Sou um dado');
}
souUmDado();

//arrow function
const functionArrow = () => {
    console.log('Sou uma arrow function');
}
functionArrow()

//function em um objeto
const obj = {
    falar(){ //podemos com o novo js remover a palavra 'function' e ':'.
        console.log('Estou falando');
    }
}
obj.falar();