function soma (x,y) {
    if (typeof x && typeof y !== 'number') {
        throw new Error('x e y precisam ser números'); 
    } 

    return x+y;
}

try {
    console.log(soma(2,2));
    console.log(soma(2,'4'));
}catch(erro) {
    /* console.log(erro); */
    console.log('Algo deu errado...')
}

/*
throw -> imprime mensagem de erro
new Error -> objeto construtor que dá mais detalhes sobre o erro
try -> coloca as tentativas de impressão
catch -> exibe o retorno dos erros 
*/
