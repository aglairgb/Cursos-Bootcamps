//factory function -> function que retorna objetos
function criarCalculadora(){
    return {

        display: document.querySelector('.display'),
        botoes: document.querySelectorAll('.btn'),
        limparTudo: document.querySelector('.btn-clear'),
        limparUm: document.querySelector('.btn-del'),
        botaoIgual: document.querySelector('.btn-eq'),


        //ATRIBUTOS EM CIMA 👆🏽

        //MÉTODOS EMBAIXO 👇🏽

        valorBotoes(){
            this.botoes.forEach((botao) => {
                botao.addEventListener('click', () => {
                    if(botao !== this.botaoIgual) {
                        this.display.value +=  botao.textContent;
                    }
                });
            });
        },

        limparDisplay(){
            this.limparTudo.addEventListener('click', () => {
                this.display.value = '';
            })
        },

        deleteUm() {
            this.limparUm.addEventListener('click', () => {
                this.display.value = this.display.value.slice(0, -2);
            })
        },

        calcular(){
            this.botaoIgual.addEventListener('click', () => {
                let displayValue = this.display.value;

                try{
                    displayValue = eval(displayValue);
                   
                    if(isNaN(displayValue)) {
                        alert('Conta inválida!');
                        this.display.value = '';
                        return;
                    }

                    this.display.value = String(displayValue);
                }catch(e){
                    alert('Conta inválida');
                    this.display.value = '';
                }
                  
            });
        },

        calcularEnter(){
            this.display.addEventListener('keydown', (e) => {
                if(e.key === 'Enter') {
                    let displayValue= this.display.value;

                    try {
                        displayValue = eval(displayValue);

                        if(isNaN(displayValue)) {
                            alert('Conta inválida!');
                            this.display.value = '';
                            return;
                        }

                        this.display.value = String(displayValue);
                    }catch(e) {
                        alert('Conta inválida!');
                        this.display.value = '';
                    }
                }
            })
        },
    };
};

document.addEventListener('DOMContentLoaded', () => {
    const calculadora = criarCalculadora();
    calculadora.valorBotoes();
    calculadora.limparDisplay();
    calculadora.deleteUm();
    calculadora.calcular();
    calculadora.calcularEnter();
})