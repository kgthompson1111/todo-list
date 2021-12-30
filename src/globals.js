import { todoFactory } from './todoManager.js';
import { projectFactory } from './projectManager.js';

let currentProject;
let projectList = [];

function writeData() {
    localStorage.setItem("projectData", JSON.stringify(projectList) || []);
}

function readData() {
    //load readArray
    let readArray = JSON.parse(localStorage.getItem("projectData"));
    for(var i = 0; i<readArray.length; i++) {
        projectList[i] = readArray[i];
        projectList[i].todoManager = new todoFactory();
        readArray = JSON.parse(localStorage.getItem("projectData"));
        // iterate through the STORED todo list and write to new todoFactory list

            for(var j = 0; j<readArray[i].todoManager.todoList.length; j++) {
            projectList[i].todoManager.todoList[j] = readArray[i].todoManager.todoList[j];
            }
    }
}

export { currentProject, projectList, writeData, readData };