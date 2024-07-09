const horas = () => {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
    })
}

//atualizar a hora a cada 1 segundo
const timer = setInterval(() => {
    console.log(horas())
}, 1000)

//parar de atualizar com 6 segundos
setTimeout(() => {
    clearInterval(timer);
}, 4000)

//muda a mensagem exibida após 6 segundos - e para o código
const mudarMsg = setTimeout(() => {
    console.log('Olá, mundo!');
},6000)
