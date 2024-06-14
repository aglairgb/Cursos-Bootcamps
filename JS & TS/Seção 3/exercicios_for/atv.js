const elementos = [
    {tag: 'div', texto: 'Frase 1'},       //0
    {tag: 'section', texto: 'Frase 2'},   //1
    {tag: 'main', texto: 'Frase 3'},      //2
    {tag: 'footer', texto: 'Frase 4'},    //3
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    //atribuição via desestruturação de objeto
    let { tag, texto } = elementos[i];
    let criarTag = document.createElement(tag);
    criarTag.innerHTML = texto;

    div.appendChild(criarTag);
}

container.appendChild(div);


//style
div.style.display = 'flex';
div.style.flexDirection = 'column';
div.style.gap = '2rem';
div.style.padding = '1rem';




