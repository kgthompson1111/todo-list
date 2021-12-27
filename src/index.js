import './style.css';

const projectList = [];
let currentProject;

function project(title) {
    this.title = title;
}

// function task(title, description, dueDate, isDone) {
//     this.title = title;
//     this.description = description;
//     this.dueDate = dueDate;
//     this.isDone = isDone;
// }

// populate project list

projectList[0] = new project('Example1');
projectList[1] = new project('Example2');
projectList[2] = new project('Example3');

// list projects

function projectForm() {
    
}

function activeProject(e) {
    if(currentProject) {
        const thisProject = document.getElementById(currentProject);
        thisProject.classList.remove('activeProject');
    }
    currentProject = e.target.id;
    const thisProject = document.getElementById(currentProject);
    thisProject.classList.add('activeProject');

    activeHeader.innerText = `${currentProject} To-do:`;
}

function deleteProject(e) {
    // returns the ID as a string
    const targetId = e.target.parentNode.id;
    console.log(targetId);
    // returns the DOM object of the current ID
    const targetItem = document.getElementById(targetId);
    console.log(targetItem);
    const index = projectList.findIndex(i => i.title == `${targetId}`);
    
    // if(currentProject == targetId) {
    //     return;
    // }

    // delete from projects array
    projectList.splice(index, 1);

    // delete dom element
    e.target.parentNode.parentNode.removeChild(targetItem);

    renderProjects();

}

function renderProjects() {

    // clear project list to prevent display bugs
    projects.innerHTML = "<h2>Projects</h2>"
    for(var i=0; i<projectList.length; i++) {

        const projectItem = document.createElement('div');
        projectItem.innerText = projectList[i].title;
        projectItem.classList.add('projectItem');
        projectItem.classList.add('clickable');

        projectItem.id = projectList[i].title;

        projects.appendChild(projectItem);

        projectItem.addEventListener('click', activeProject);

        const deleteProjectButton = document.createElement('div');
        deleteProjectButton.innerText = "X";
        deleteProjectButton.classList.add('deleteProjectButton');
        projectItem.appendChild(deleteProjectButton);

        deleteProjectButton.addEventListener('click', deleteProject);
    }

    //render the project add field/button

    const newProject = document.createElement('div');
    newProject.classList.add('projectItem');
    newProject.id = "newProject";
    const addProjectButton = document.createElement('div');
    addProjectButton.innerText = "\+";

    const projectInput = document.createElement('input');
    projectInput.id = "projectInput";
    newProject.appendChild(projectInput);

    addProjectButton.id = 'addProjectButton';
    newProject.appendChild(addProjectButton);


    projects.appendChild(newProject);

}

renderProjects();