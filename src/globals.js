import { todoFactory } from './todoManager.js';
import { projectFactory } from './projectManager.js';

let currentProject;
const projectList = [];

// function writeData() {
//     localStorage.setItem("projectData", JSON.stringify(projectList) || []);
// }

// function readData() {
//     let readArray = JSON.parse(localStorage.getItem("projectData"));
// }

export { currentProject, projectList };