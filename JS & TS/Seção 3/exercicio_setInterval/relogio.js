const container = document.querySelector('.container');
//cria o span
const pHoras = document.createElement('span');
//define o texto do span
const vHoras = document.createTextNode('00:00:00');
//vincula o texto no span
pHoras.appendChild(vHoras);
//vincula o span no container
container.appendChild(pHoras)
//cria btn iniciar/pausar/zerar
const start = document.createElement('button');
const pausar = document.createElement('button');
const zerar = document.createElement('button');
//define os nomes do buttons
const tstart = document.createTextNode('Iniciar');
const tpausar = document.createTextNode('Pausar');
const tzerar = document.createTextNode('Zerar');
//vincula os textos aos buttons
start.appendChild(tstart);
pausar.appendChild(tpausar);
zerar.appendChild(tzerar);
//Cria uma div somente para os buttons
const divB = document.createElement('div');
//Vincula as divs aos buttons
divB.appendChild(pHoras);
divB.appendChild(start);
divB.appendChild(pausar);
divB.appendChild(zerar);
//Vincula a div no container
container.appendChild(divB);
//style
divB.style.display = 'flex';
divB.style.flexDirection = 'column';
divB.style.gap = '0.5rem';
pHoras.style.fontSize = '3rem'
container.style.textAlign = 'center'
start.style.cursor = 'pointer';
pausar.style.cursor = 'pointer';
zerar.style.cursor = 'pointer';
//lógica para funcionar o relógio
const zeroAEsquerda = (time) => {
    return time < 10 ? `0${time}` : time;
}
let intervalo;
let segundos = 0;
let minutos = 0;
let horas = 0;
const iniciar = () => {
    intervalo = setInterval(() =>{
        segundos++;
        if(segundos === 60){
            segundos = 0;
            minutos++
        } else if (minutos === 60) {
            minutos = 0;
            horas++
        } else if (horas === 24){
            horas = 0;
        }

        pHoras.textContent = `${zeroAEsquerda(horas)}:${zeroAEsquerda(minutos)}:${zeroAEsquerda(segundos)}`;
        pHoras.style.color = 'black';
    },1000)
}
const stop = () => {
    clearInterval(intervalo);
    pHoras.style.color = 'red';
}
const reset = () => {
    clearInterval(intervalo);
    pHoras.textContent = '00:00:00';
    pHoras.style.color = 'black';
} 
start.addEventListener('click', iniciar);
pausar.addEventListener('click', stop);
zerar.addEventListener('click', reset);