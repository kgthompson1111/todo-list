let currentProject;
const projectList = [];

function populateStorage() {
    localStorage.setItem("data", JSON.stringify(projectList));
}

export { currentProject, projectList, populateStorage };