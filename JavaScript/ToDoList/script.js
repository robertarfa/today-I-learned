var ulElement = document.querySelector('#app ul')
var inputElement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')

var toDoList = JSON.parse(localStorage.getItem('todo_list')) || []

function renderToDoList(){
    ulElement.innerHTML = ''

    for (todo of toDoList){
        var liElement = document.createElement('li')
        var toDoText = document.createTextNode(todo)

        ulElement.appendChild(liElement)
        liElement.appendChild(toDoText)
    }
}

renderToDoList()

function addTodo(){
    var toDoText = inputElement.value

    toDoList.push(toDoText)
    inputElement.value = ''
    renderToDoList()
    saveToStorage();
}

buttonElement.onclick = addTodo

function saveToStorage(){
    localStorage.setItem('todo_list', JSON.stringify(toDoList))
}

//Usar Vuejs para marcar o que já foi pego