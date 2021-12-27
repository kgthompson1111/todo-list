function projectFactory() {
// project manager code

// project related variables
const projectList = [];
let currentProject;

function project(title) {
    this.title = title;
}

// makes a javascript valid id based on project title
function idMaker(string) {
    let newTitle = string + "id";
    let titleFixer = newTitle.replace(/ /g, "");
    newTitle = titleFixer.toLowerCase();
    return newTitle;
}

// handle active projects
function activeProject(e) {
    // remove previous highlighted current project
    if(currentProject) {
        const thisProject = document.getElementById(currentProject);
        thisProject.classList.remove('activeProject');
    }
    currentProject = e.target.id;
    const thisProject = document.getElementById(currentProject);
    thisProject.classList.add('activeProject');

    activeHeader.innerText = `${thisProject.firstChild.data} To-do:`;
}

function checkDuplicate(input) {
    //check if duplicate

    let duplicateChecker = input;
    let duplicateCheckerReplaced = duplicateChecker.replace(/ /g, "");
    duplicateChecker = duplicateCheckerReplaced + "id";

    for(var i = 0; i < projectList.length; i++) {
        if(projectList[i].id == duplicateChecker) {
            alert("project must not be duplicate");
            projectInputField.value = "";
            console.log("duplicate detected");
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
    // returns the DOM object of the current ID
    const targetItem = document.getElementById(targetId);
    const index = projectList.findIndex(i => i.title == `${targetId}`);
    
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

return { project, projectList, currentProject, idMaker, activeProject, deleteProject, renderProjects };
}

// exports to index.js
export { projectFactory };