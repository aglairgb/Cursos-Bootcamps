const container = document.querySelector('.container');
const input = document.querySelector('.input');
const btnAdd = document.querySelector('.btn-add');
const lista = document.querySelector('.lista');
//title em btnAdd
btnAdd.setAttribute('title', 'Adicionar tarefa')
//evento ao clica no btnAdd
btnAdd.addEventListener('click', () => {
    if(input.value !== ''){
        adicionarTarefa(input.value);
        input.value = '';
    }else {
        alert('O campo não pode estar vazio.')
    }
})
//function que cria as listas
function criarLi(texto){
    const li = document.createElement('li');
    li.setAttribute('title', 'tarefa');
    li.textContent = texto;
    li.style.wordBreak = 'break-word';
    li.style.marginTop = '1rem';
    return li;
}
//function que adiciona as tarefas ao clicar no btnAdd
function adicionarTarefa(texto){
    const li = criarLi(texto);
    lista.appendChild(li);
    input.focus();
    criarButtonDelete(li);
    criarBtnEdite(li);
    salvarTarefas();
}
//evento ao clicar enter no input
input.addEventListener('keyup', (e) => {
    if(input.value !== ''){
        adicionarTarefaEnter(e); 
    }else {
        alert('O campo não pode estar vazio');
    }
})
//function adicionar tarefa ao clicar 'enter'
function adicionarTarefaEnter (e) {
    if(e.key === 'Enter') {
        adicionarTarefa(input.value)
        input.value = ''
    }
}
//function que cria div para button
function criarDivBtn(){
    const divBtn = document.createElement('div');
    return divBtn;
}
//function que cria button delete
function criarButtonDelete(li){
    const divBtn = criarDivBtn();
    const btnDelete = document.createElement('button');
    btnDelete.textContent = 'Deletar';
    btnDelete.setAttribute('title', 'Deletar tarefa');
    divBtn.appendChild(btnDelete);
    li.appendChild(divBtn);
    styleButtonDelete(divBtn, btnDelete);
    btnDelete.addEventListener('click', deleteTarefa);
}
//style divButton/button
function styleButtonDelete(divBtn, btnDelete){
    divBtn.style.display = 'flex';
    divBtn.style.gap = '1rem';
    divBtn.style.justifyContent = 'center'
    divBtn.style.marginTop = '1rem';
    btnDelete.style.padding = '0.3rem'
    btnDelete.style.backgroundColor = '#DB6D6D';
    btnDelete.style.border = 'none'
    btnDelete.style.borderRadius = '0.3rem'; 
    btnDelete.style.fontWeight = 'bolder'
    btnDelete.style.cursor = 'pointer'
}
//function que deleta tarefa
function deleteTarefa(e){
    const btnDelete = e.target;
    const li = btnDelete.parentNode.parentNode;
    li.remove();
    salvarTarefas();
}
//function que cria button edite
function criarBtnEdite(li){
    const btnEdite = document.createElement('button');
    btnEdite.textContent = 'Editar';
    btnEdite.setAttribute('title', 'Editar tarefa');
    styleBtnEdite(btnEdite);
    const divBtn = li.querySelector('div');
    divBtn.appendChild(btnEdite)
    btnEdite.addEventListener('click', editarTarefa);
}
//style button edite
function styleBtnEdite(btnEdite){
    btnEdite.style.padding = '0.4rem'
    btnEdite.style.backgroundColor = 'rgb(235, 235, 129)';
    btnEdite.style.border = 'none'
    btnEdite.style.borderRadius = '0.3rem'; 
    btnEdite.style.fontWeight = 'bolder'
    btnEdite.style.cursor = 'pointer'  
}
//function que edite tarefa
function editarTarefa(e){
    const btnEdite = e.target;
    const divBtn = btnEdite.parentNode;
    const li = divBtn.parentNode;
    const ul = li.parentNode;
    const textoTarefa = li.childNodes[0].nodeValue.trim();
    const textarea = document.createElement('textarea');
    textarea.style.width = '100%';
    textarea.value = textoTarefa;
    ul.replaceChild(textarea, li)
    textarea.focus();
    textarea.style.margin = '1rem';
    textarea.setAttribute('title', 'Edite sua tarefa e ao finalizar clique "Enter".')
    textarea.addEventListener('blur', () => {
        salvarBlur(textarea, ul);
    })
    textarea.addEventListener('keyup', (e) => {
        salvarEnter(e, textarea, ul);
    })
}
//function que salva tarefa ao sair do campo
function salvarBlur(textarea, ul){
    const novoTexto = textarea.value.trim();
    const novoLi = criarLi(novoTexto); 
    ul.replaceChild(novoLi, textarea); 
    criarButtonDelete(novoLi); 
    criarBtnEdite(novoLi);
}
//function que salva tarefa ao clicar 'Enter'
function salvarEnter(e, textarea, ul){
    if(e.key === 'Enter'){
        const novoTexto = textarea.value.trim();
        const novoLi = criarLi(novoTexto);
        ul.replaceChild(novoLi, textarea);
        criarButtonDelete(novoLi)
        criarBtnEdite(novoLi);
    }
}
//function salvar tarefas no localstorage
function salvarTarefas(){
    const liTarefas = lista.querySelectorAll('li');
    const listaDeTarefas = []; 
    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.textContent.trim();
        tarefaTexto = tarefaTexto.replace('Deletar', '').replace('Editar', '');
        listaDeTarefas.push(tarefaTexto);
    }
    //converter array para json
    const tarefasJSON = JSON.stringify(listaDeTarefas); 
    localStorage.setItem('tarefas', tarefasJSON);
}
//converte de json para array
(function manterTarefaSalva(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    for(let tarefa of listaDeTarefas){
        adicionarTarefa(tarefa);
    }
})();