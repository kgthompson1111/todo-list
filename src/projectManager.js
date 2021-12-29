import { todoFactory } from './todoManager.js';
import { currentProject, projectList } from './globals.js';

function projectFactory() {

function project(title, todoManager) {
    this.title = title;
    this.todoManager = new todoFactory();
}

// makes a javascript valid id based on project title
function idMaker(string) {
    let newId = string;
    let idSpaceFixer = newId.replace(/ /g, "");
    let idCharFixer = idSpaceFixer.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    newId = idCharFixer.toLowerCase() + "projectid";
    return newId;
}

function checkCurrentProject() {
    if(currentProject != null) {
        const thisProjectElement = document.getElementById(currentProject);
        thisProjectElement.classList.remove('activeProject');
    }
}

function setCurrentProject(current) {
    currentProject = current;
    const thisProjectElement = document.getElementById(currentProject);
    thisProjectElement.classList.add('activeProject');
    activeHeader.innerText = `${thisProjectElement.firstChild.data} to-do:`;
}

// handle active projects
function activeProject(e) {
    // remove previous highlighted current project
    checkCurrentProject();
    setCurrentProject(e.target.id);

    // render todos based on project index
    const index = projectList.findIndex(i => i.id == `${currentProject}`);
    projectList[index].todoManager.renderTodos();
}

function checkDuplicate(input) {
    //check if duplicate

    let duplicateChecker = input;
    let duplicateCheckerReplaced = duplicateChecker.replace(/ /g, "");
    duplicateChecker = duplicateCheckerReplaced + "projectid";

    for(var i = 0; i < projectList.length; i++) {
        if(projectList[i].id == duplicateChecker) {
            alert("project must not be duplicate");
            projectInputField.value = "";
            return true;
        }
    }
    return false;
}

function addProject() {
    //check if blank form field

    if(!projectInputField.value) {
        alert("field must not be empty");
        return;
    }
    
    const isDuplicate = checkDuplicate(projectInputField.value);

    if(!isDuplicate) {    
        const newProjectTitle = projectInputField.value;
        const newProjectId = idMaker(projectInputField.value);

        // make new project object
        const newProject = new project(`${newProjectTitle}`);
        newProject.id = `${newProjectId}`;
        projectList.push(newProject);

        renderProjects();

        checkCurrentProject();

        setCurrentProject(newProject.id);

        const index = projectList.findIndex(i => i.id == `${currentProject}`);
        projectList[index].todoManager.renderTodos();

    }

}

function appendProjectForm() {
    //render the project add field/button
    const newProjectForm = document.createElement('div');
    newProjectForm.classList.add('projectItem');
    newProjectForm.id = "newProjectForm";

    const projectInputField = document.createElement('input');
    projectInputField.id = "projectInputField";
    newProjectForm.appendChild(projectInputField);

    const addProjectButton = document.createElement('div');
    addProjectButton.innerText = "\+";
    addProjectButton.id = 'addProjectButton';
    addProjectButton.classList.add('addButton');
    newProjectForm.appendChild(addProjectButton);
    addProjectButton.addEventListener('click', addProject);

    projects.appendChild(newProjectForm);
}


function deleteProject(e) {

    // double check to delete entire project
    if(window.confirm("Are you sure? Deleting a project will remove all of the tasks.")) {
        null;
    } else {
        e.stopPropagation();
        return;
    }

    // returns the ID as a string
    const targetId = e.target.parentNode.id;

    // returns the index that matches the string ID
    const index = projectList.findIndex(i => i.id == `${targetId}`);

    // returns the DOM object of the current ID
    const targetItem = document.getElementById(targetId);

    // delete all sub-projects
    projectList[index].todoManager.todoList.splice(0, projectList[index].todoManager.todoList.length);

    // if viewing current project, delete all dom elements
    if(currentProject == projectList[index].id) {
        const thisProjectElement = document.getElementById(currentProject);
        todos.innerHTML = `<h2 id="activeHeader">${thisProjectElement.firstChild.data} to-dos:`;
        projectList[index].todoManager.appendTodoForm();
        if(projectList[0] == null) {
            console.log("there's nothing here")
        }

        activeHeader.innerText = "No project selected";
    }

    // delete from projects array
    projectList.splice(index, 1);

    // delete dom element
    e.target.parentNode.parentNode.removeChild(targetItem);
    e.stopPropagation();
    renderProjects();

    if(projectList.length ==0) {
        todos.removeChild(todos.childNodes[1]);
        activeHeader.innerText = "No project selected";
    } 

    if(targetId == currentProject) {
        currentProject = null;
    }
}

function projectsDivMaker() {
    // if array is up-to-date, this function renders the visual divs
    for(var i=0; i<projectList.length; i++) {

        const projectItem = document.createElement('div');
        projectItem.innerText = projectList[i].title;
        projectItem.classList.add('projectItem');
        projectItem.classList.add('clickable');

        projectItem.id = idMaker(projectList[i].title);

        projects.appendChild(projectItem);

        projectItem.addEventListener('click', activeProject);

        const deleteProjectButton = document.createElement('div');
        deleteProjectButton.innerText = "x";
        deleteProjectButton.classList.add('deleteButton');
        projectItem.appendChild(deleteProjectButton);

        deleteProjectButton.addEventListener('click', deleteProject);
    }
}

function renderProjects() {

    for(var i = 0; i<projectList.length; i++) {
        projectList[i].id = idMaker(projectList[i].title);
    }

    // clear project list to prevent display bugs
    projects.innerHTML = "<h2>Projects</h2>"

    // creates divs
    projectsDivMaker();

    appendProjectForm();
}

return { project, projectList, currentProject, idMaker, activeProject, deleteProject, renderProjects, setCurrentProject, idMaker };
}

// exports to index.js
export { projectFactory };