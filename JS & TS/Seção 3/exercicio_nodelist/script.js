const p = document.querySelectorAll('.paragrafos p');

//puxar dinamicamente o bkg da sua página:
const estilosBody = getComputedStyle(document.body);
const backgroundColor = estilosBody.backgroundColor;

for (let valor of p) {
    //add background dinamicamente
    valor.style.backgroundColor = backgroundColor;
    valor.style.color = '#fff';
    valor.style.borderRadius = '1rem';
    valor.style.padding = '1rem';
} 

