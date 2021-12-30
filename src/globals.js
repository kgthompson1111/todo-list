import { todoFactory } from './todoManager.js';
import { projectFactory } from './projectManager.js';

let currentProject;
const projectList = [];

function writeData() {
    localStorage.setItem("projectData", JSON.stringify(projectList) || []);
}

function readData() {
    //load readArray
    let readArray = JSON.parse(localStorage.getItem("projectData"));

    for(var i = 0; i<readArray.length; i++) {
        projectList[i] = readArray[i];
        projectList.todoManager = new todoFactory();
    }

}

export { currentProject, projectList, writeData, readData };