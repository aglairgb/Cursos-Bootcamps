//criou o input
const novoInput = document.createElement('input'); 

//definiu o tipo
novoInput.setAttribute('type', 'color');

//adicionou ao corpo da página
document.body.appendChild(novoInput);

//criou o button
const mudarCor = document.createElement('button');

//criou o texto para o button
const textoButton = document.createTextNode('Mudar cor');

//associou o texto ao button
mudarCor.appendChild(textoButton);

//adicionou o button na página
document.body.appendChild(mudarCor)

//função ao clicar o button
mudarCor.addEventListener('click', () =>  {
    const valorInput = novoInput.value; 
    document.body.style.backgroundColor = valorInput;
})

//CSS em JavaSCript
let body = document.body.style;
body.display = 'flex';
body.justifyContent = 'center';
body.margin = '15rem';
body.gap = '2rem';

mudarCor.style.cursor = 'pointer';


