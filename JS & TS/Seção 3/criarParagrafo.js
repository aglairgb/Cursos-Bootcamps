const container = document.createElement('div');

const paragrafo = document.createElement('p');
const texto = document.createTextNode('Texto criado com JavaScript.');

paragrafo.appendChild(texto);

container.appendChild(paragrafo);

document.body.appendChild(container);