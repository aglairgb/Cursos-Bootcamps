/* try {
    //É executada quando NÃO há erros
    console.log(a);
    console.log('Sou um texto no try');
}catch(error){
    //É executado quando HÁ erros
    console.log('Algo deu errado no try');
}finally {
    //Sempre
    console.log('Finally: Sempre sou executado');
} */

const horas = (data) => {
    if(data && !(data instanceof Date)){
        throw new TypeError('Esperando instância de Date');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
};


try{
    console.log(horas(11));
}catch(error) {
    console.log('Algo deu errado...');
}finally {
    console.log('Finally: Não sou monarca, mas meu destino sempre é ser executado.')
}