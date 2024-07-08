(function imc() {
    const form = document.querySelector('#form');
    const table = document.querySelector('#table');

    function recebeEventForm(e) {
        e.preventDefault(); //previne que página atualize

        //valor de peso e altura
        const peso = parseFloat(document.querySelector('#peso').value);
        const altura = parseFloat(document.querySelector('#altura').value);

        //cálculo imc
        const imc = peso / (altura ** 2);

        //status imc
        const statusImc =
            imc < 18.5 ? 'abaixo_do_peso' :
                (imc >= 18.5 && imc <= 24.9) ? 'peso_normal' :
                    (imc >= 25 && imc <= 29.9) ? 'sobrepeso' :
                        (imc >= 30 && imc <= 34.9) ? 'obesidade-grau-I' :
                            (imc >= 35 && imc <= 39.9) ? 'obesidade-grau-II' :
                                (imc >= 40) ? 'obesidade-grau-III' :
                                    'erro';

        //reseta o estilo
        const linhasTabela = table.querySelectorAll('tr');
        linhasTabela.forEach(linha => {
            linha.style.backgroundColor = '';
        });

        //altera bkg do status correspondente
        const linhaResultado = table.querySelector(`#${statusImc}`);
        if (linhaResultado) {
            linhaResultado.style.backgroundColor = '#a6daba';
        } else {
            console.error('Status Imc não encontrado na tabela');
        }

    };

    form.addEventListener('submit', recebeEventForm);
})();
