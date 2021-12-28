import { currentProject } from './globals.js';
import { projectList } from './globals.js';

function todoFactory() {

    const todoList = [];

    function todoItem(title, description, dueDate, isHighPriority, isDone) {
        this.title = title;
        this.dueDate = dueDate;
        this.description = description;
        this.isHighPriority = isHighPriority;
        isDone = false;
    }

    function showTodoForm() {

        // remove add button and replace with hide button
        newTodoCard.removeChild(addTodoButton);
        appendHideButton();
        // title label and input
        const titleLabel = document.createElement('label');
        titleLabel.id = 'titleLabel';
        titleLabel.for = 'titleInput';
        titleLabel.innerText = 'Task ';
        titleLabel.classList.add('label');
        const titleInput = document.createElement('input');
        titleInput.id = 'titleInput';
        titleInput.type = 'text';
        titleLabel.appendChild(titleInput);
        newTodoCard.appendChild(titleLabel);

        // due date label and input
        const dueDateLabel = document.createElement('label');
        dueDateLabel.id = 'dueDateLabel';
        dueDateLabel.for = 'dueDateInput';
        dueDateLabel.innerText = 'Due Date ';
        dueDateLabel.classList.add('label', 'todoDueDate');
        const dueDateInput = document.createElement('input');
        dueDateInput.id = 'dueDateInput';
        dueDateInput.type = 'date';
        dueDateLabel.appendChild(dueDateInput);
        newTodoCard.appendChild(dueDateLabel);

        // description label and input
        const descriptionLabel = document.createElement('label');
        descriptionLabel.id = 'descriptionLabel';
        descriptionLabel.for = 'descriptionInput';
        descriptionLabel.innerText = 'Description ';
        descriptionLabel.classList.add('label');
        const descriptionInput = document.createElement('input');
        descriptionInput.id = 'descriptionInput';
        descriptionInput.type = 'text';
        descriptionLabel.appendChild(descriptionInput);
        newTodoCard.appendChild(descriptionLabel);

        // high priority label and input
        const highPriorityLabel = document.createElement('label');
        highPriorityLabel.id = 'highPriorityLabel';
        highPriorityLabel.for = 'highPriorityInput';
        highPriorityLabel.innerText = 'High Priority? ';
        highPriorityLabel.classList.add('label');
        const highPriorityInput = document.createElement('input');
        highPriorityInput.id = 'highPriorityInput';
        highPriorityInput.type = 'checkbox';
        highPriorityLabel.appendChild(highPriorityInput);
        newTodoCard.appendChild(highPriorityLabel);
        
        // add button
        const submitTodoForm = document.createElement('button');
        submitTodoForm.id = 'submitTodoForm';
        submitTodoForm.innerText = "Submit";
        submitTodoForm.addEventListener('click', addTodoItem);
        newTodoCard.appendChild(submitTodoForm);
    }

    function hideTodoForm() {
        console.log(newTodoCard);
        newTodoCard.removeChild(titleLabel);
        newTodoCard.removeChild(dueDateLabel);
        newTodoCard.removeChild(descriptionLabel);
        newTodoCard.removeChild(highPriorityLabel);
        newTodoCard.removeChild(submitTodoForm);
        newTodoCard.removeChild(hideTodoButton);

        appendFormButton();

    }

    function appendFormButton() {
        const addTodoButton = document.createElement('div');
        addTodoButton.innerText = "\+";
        addTodoButton.id = 'addTodoButton';
        addTodoButton.classList.add('addButton');
        newTodoCard.appendChild(addTodoButton);

        addTodoButton.addEventListener('click', showTodoForm);
    }

    function appendHideButton() {
        const hideTodoButton = document.createElement('div');
        hideTodoButton.innerText = "\-";
        hideTodoButton.id = 'hideTodoButton';
        hideTodoButton.classList.add('deleteButton');
        newTodoCard.appendChild(hideTodoButton);

        hideTodoButton.addEventListener('click', hideTodoForm);
    }

    function appendTodoForm() {
            // new todo Card
            const newTodoCard = document.createElement('div');
            newTodoCard.classList.add('todoItem');
            newTodoCard.id = 'newTodoCard';

            todos.appendChild(newTodoCard);

            appendFormButton();

    }

    function idMaker(string) {
        let randomNumber = (Math.floor(Math.random()*3000));
        let newId = string + "todoid" + randomNumber;
        let idFixer = newId.replace(/ /g, "");
        newId = idFixer.toLowerCase();
        return newId;
    }

    // function checkPriority() {
        
    // }

    function addTodoItem() {
        // create a new todo in current project
        const index = projectList.findIndex(i => i.id == `${currentProject}`);

        // check for required fields
        if(`${titleInput.value}` == "") {
            alert("Task is a required field");
            return;
        }
        

        console.log(dueDateInput.value);

        // add new todo item with content in the form
        const newTodoItem = new todoItem(
        //title
        `${titleInput.value}`,
        //description
        `${descriptionInput.value}`,
        //due date
        `${dueDateInput.value}`,
        //high priority
        highPriorityInput.checked ? true : false
        );
        
        // check for high priority and add high priority calss
        
        projectList[index].todoManager.todoList.push(newTodoItem);
        projectList[index].todoManager.renderTodos();

    }

    function deleteTodoItem(e) {
        // double check to delete entire project
        if(window.confirm("Are you sure you want to delete this item?")) {
            null;
        } else {
            return;
        }
    
        // returns the ID as a string
        const targetId = e.target.parentNode.id;
    
        // returns the index that matches the string ID
        const index = todoList.findIndex(i => i.id == `${targetId}`);

        // // returns the DOM object of the current ID
        const targetItem = document.getElementById(targetId);
    
        // // delete from todo array
        todoList.splice(index, 1);
    
        // // delete dom element
        e.target.parentNode.parentNode.removeChild(targetItem);
        renderTodos();
    }

    function renderTodos() {    
    // do not render todos if there is no current project
    if(!currentProject == null) {
        return;
    }
    const thisProjectElement = document.getElementById(currentProject);
    todos.innerHTML = `<h2 id="activeHeader">${thisProjectElement.firstChild.data} to-dos:`;
    //find the index of the current project and render the todos under that index
    const index = projectList.findIndex(i => i.id == `${currentProject}`);

        for(var i = 0; i<projectList[index].todoManager.todoList.length; i++) {
            const newTodoId = idMaker(projectList[index].todoManager.todoList[i].title);
            const todoItem = document.createElement('div');
            todoItem.classList.add('todoItem');
            todoItem.id = newTodoId;
            todoList[i].id = newTodoId;

            //check for high priority item and update class and styling
            if(projectList[index].todoManager.todoList[i].isHighPriority == true) {
                todoItem.classList.add('highPriorityItem');
                const highPriorityText = document.createElement('div');
                highPriorityText.id = 'highPriorityText';
                highPriorityText.textContent = "Priority: High";
                todoItem.appendChild(highPriorityText);
            } 

            // todo title
            const todoTitle = document.createElement('div');
            todoTitle.classList.add('todoContent', 'todoTitle');
            todoTitle.innerText = todoList[i].title;
            todoItem.appendChild(todoTitle);

            // todo dueDate
            if(todoList[i].dueDate) {
            const todoDueDate = document.createElement('div');
            todoDueDate.classList.add('todoContent', 'todoDueDate');
            todoDueDate.innerText = "due " + todoList[i].dueDate;
            todoItem.appendChild(todoDueDate);
            }

            // todo description
            const todoDescription = document.createElement('div');
            todoDescription.classList.add('todoContent', 'todoDescription');
            todoDescription.innerText = todoList[i].description;
            todoItem.appendChild(todoDescription);

            const deleteTodoButton = document.createElement('div');
            deleteTodoButton.innerText = "x";
            deleteTodoButton.classList.add('deleteButton');
            deleteTodoButton.addEventListener('click', deleteTodoItem);
            todoItem.appendChild(deleteTodoButton);

            todos.appendChild(todoItem);
        }

        appendTodoForm();
    }

    return { todoList, todoItem, renderTodos, appendTodoForm };
}

export { todoFactory };