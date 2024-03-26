(function naoAtualizar(){
    const form = document.querySelector('.form');
    const resultados = document.querySelector('.resultados');

    /* form.onsubmit = function(evento) {
        evento.preventDefault(); //evita que atualize a página.
        console.log('A página não foi recarregada.')
    }  // forma alternativa*/  

    const pessoas = [];

    function recebeEventForm(evento) {
        evento.preventDefault(); //evita que atualize a paǵina

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);

        resultados.innerHTML += `
            <div style="margin-bottom: 20px; text-align: center;">
               Nome: ${nome.value} | Sobrenome: ${sobrenome.value} | Peso: ${peso.value}kg | Altura: ${altura.value}m
            </div>
        `;
        
    };


    form.addEventListener('submit', recebeEventForm);
})();


