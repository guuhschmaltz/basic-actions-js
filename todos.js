var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');


//array de todos
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

//função para renderizar os Todos do array acima
function renderTodos(){
    listElement.innerHTML = '';

    for(todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');

        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deleteTodo('+ pos +')');
        var linkText = document.createTextNode('Excluir');

        linkElement.appendChild(linkText);
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}
renderTodos();


//função para adicionar Todos ao array acima
function addTodo(){
    var todoText = inputElement.value;
    
    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos){
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

//Salvando em um storage local usando uma conversão do vetor para string em json
function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}