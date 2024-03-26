const nome = prompt('Digite o seu nome completo');
        
document.body.innerHTML += `O seu nome é ${nome}<br />`;
document.body.innerHTML += `Seu nome tem ${nome.length} letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nome[1]} <br />`
document.body.innerHTML += `As útlimas letras do seu nome são: ${nome.substring(nome.length -3)} <br />`
document.body.innerHTML += `As letras do seu nome são: ${nome.split('')} <br />`
document.body.innerHTML += `Seu nome com letras maíusculas: ${nome.toLocaleUpperCase()} <br />`;
document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLocaleLowerCase()} <br />`;