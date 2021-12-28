import { todoFactory } from './todoManager.js';
import { currentProject, projectList } from './globals.js';

function projectFactory() {


function project(title, todoManager) {
    this.title = title;
    this.todoManager = new todoFactory();
}

// makes a javascript valid id based on project title
function idMaker(string) {
    let newTitle = string + "projectid";
    let titleFixer = newTitle.replace(/ /g, "");
    newTitle = titleFixer.toLowerCase();
    return newTitle;
}

function checkCurrentProject() {
    if(currentProject) {
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

function appendProjectButton() {
    //render the project add field/button
    const newProjectForm = document.createElement('div');
    newProjectForm.classList.add('projectItem');
    newProjectForm.id = "newProjectForm";
    const addProjectButton = document.createElement('div');
    addProjectButton.innerText = "\+";

    const projectInputField = document.createElement('input');
    projectInputField.id = "projectInputField";
    newProjectForm.appendChild(projectInputField);

    addProjectButton.id = 'addProjectButton';
    newProjectForm.appendChild(addProjectButton);
    addProjectButton.addEventListener('click', addProject);

    projects.appendChild(newProjectForm);
}


function deleteProject(e) {
    // returns the ID as a string
    const targetId = e.target.parentNode.id;
    // returns the index that matches the string ID
    const index = projectList.findIndex(i => i.title == `${targetId}`);
    // returns the DOM object of the current ID
    const targetItem = document.getElementById(targetId);
    
    if(currentProject == targetId) {
        return;
    }

    // delete from projects array
    projectList.splice(index, 1);

    // delete dom element
    e.target.parentNode.parentNode.removeChild(targetItem);
    e.stopPropagation();
    renderProjects();
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
        deleteProjectButton.innerText = "X";
        deleteProjectButton.classList.add('deleteProjectButton');
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

    appendProjectButton();
}

return { project, projectList, currentProject, idMaker, activeProject, deleteProject, renderProjects, setCurrentProject, idMaker };
}

// exports to index.js
export { projectFactory };