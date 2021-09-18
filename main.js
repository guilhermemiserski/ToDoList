const elementoLista = document.querySelector('ul');
const elementoInput = document.querySelector('input');
const elementoButton = document.querySelector('button');

const tarefas = [];

function mostraTarefas(){

    elementoLista.innerHTML = '';
    for(tarefa of tarefas){
        const elementoTarefa = document.createElement('li');
        const textoTarefa = document.createTextNode(tarefa);

        const elementoLink = document.createElement('a');
        const pos = tarefas.indexOf(tarefa);

        elementoLink.setAttribute('href', '#')
        elementoLink.setAttribute('onclick', `excluiTarefa(${pos})`);
        const textoLink = document.createTextNode('X');
        elementoLink.appendChild(textoLink);

        elementoTarefa.appendChild(textoTarefa);
        elementoLista.appendChild(elementoTarefa);
        elementoTarefa.appendChild(elementoLink);
    }
}

function adicionarTarefa(){
    const textoTarefa = elementoInput.value
    if (textoTarefa === '') {
            alert("Você não pode inserir um campo em branco!");
    }

    else {
    tarefas.push(textoTarefa);
    elementoInput.value = '';

    mostraTarefas();
}
}

function excluiTarefa(pos){
    tarefas.splice(pos,1);
    mostraTarefas();
}

elementoButton.setAttribute('onclick', 'adicionarTarefa()');