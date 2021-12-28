import { projectFactory } from './projectManager.js';

function todoFactory() {

    const todoList = [];

    function todoItem(title, description, dueDate, isDone) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.isDone = isDone;
        isDone = false;
    }

    function renderTodos() {

        for(var i = 0; i<todoList.length; i++) {
            const todoItem = document.createElement('div');
            todoItem.classList.add('todoItem');

            // todo title
            const todoTitle = document.createElement('div');
            todoTitle.innerText = todoList[i].title;
            todoItem.appendChild(todoTitle);

            // todo description
            const todoDescription = document.createElement('div');
            todoDescription.innerText = todoList[i].description;
            todoItem.appendChild(todoDescription);

            // todo dueDate
            const todoDueDate = document.createElement('div');
            todoDueDate.innerText = todoList[i].dueDate;
            todoItem.appendChild(todoDueDate);

            // todo isDone
            const todoIsDone = document.createElement('div');
            todoIsDone.innerText = todoList[i].isDone;
            todoItem.appendChild(todoIsDone);

            todos.appendChild(todoItem);
        }
    }

    return { todoList, todoItem, renderTodos };
}

export { todoFactory };