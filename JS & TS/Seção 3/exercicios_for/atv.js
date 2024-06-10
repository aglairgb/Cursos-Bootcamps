const elementos = [
    {tag: 'div', texto: 'Frase 1'},      //0
    {tag: 'footer', texto: 'Frase 2'},   //1
    {tag: 'footer', texto: 'Frase 3'},  //2
    {tag: 'section', texto: 'Frase 4'},  //3
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];
    let p = document.createElement(tag);
    let textoNode = document.createTextNode(texto);
    p.appendChild(textoNode);
    div.appendChild(p);
}

container.appendChild(div);

//style
div.style.display = 'flex';
div.style.flexDirection = 'column';
div.style.gap = '2rem';
div.style.padding = '1rem';




