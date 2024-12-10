function Calculadora() {

    this.display = document.querySelector('.display');
    this.botoes = document.querySelectorAll('.btn');
    this.limparTudo = document.querySelector('.btn-clear');
    this.limparUm = document.querySelector('.btn-del');
    this.botaoIgual = document.querySelector('.btn-eq');

    // ATRIBUTOS EM CIMA 👆🏽

    // MÉTODOS EMBAIXO 👇🏽

    this.valorBotoes = () => {
        this.botoes.forEach((botao) => {
            botao.addEventListener('click', () => {
                if (botao !== this.botaoIgual) {
                    this.display.value += botao.textContent;
                }
            });
        });
    };

    this.limparDisplay = () => {
        this.limparTudo.addEventListener('click', () => {
            this.display.value = '';
        });
    };

    this.deleteUm = () => {
        this.limparUm.addEventListener('click', () => {
            this.display.value = this.display.value.slice(0, -1);
        });
    };

    this.calcular = () => {
        this.botaoIgual.addEventListener('click', () => {
            let displayValue = this.display.value;

            try {
                displayValue = eval(displayValue);

                if (isNaN(displayValue)) {
                    alert('Conta inválida!');
                    this.display.value = '';
                    return;
                }

                this.display.value = String(displayValue);
            } catch (e) {
                alert('Conta inválida!');
                this.display.value = '';
            }
        });
    };

    this.calcularEnter = () => {
        this.display.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                let displayValue = this.display.value;

                try {
                    displayValue = eval(displayValue);

                    if (isNaN(displayValue)) {
                        alert('Conta inválida!');
                        this.display.value = '';
                        return;
                    }

                    this.display.value = String(displayValue);
                } catch (e) {
                    alert('Conta inválida!');
                    this.display.value = '';
                }
            }
        });
    };

    this.inicia = () => {
        this.valorBotoes();
        this.limparDisplay();
        this.deleteUm();
        this.calcular();
        this.calcularEnter();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const calculadora = new Calculadora();
    calculadora.inicia();
});