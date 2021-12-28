import './style.css';

import { projectFactory } from './projectManager.js';
import { todoFactory } from './todoManager.js';

// initiate projectManager called projectFactory
const projectManager = new projectFactory();
// initiate todoFactory called todoManager
const todoManager = new todoFactory();

// populate project list and set current project
projectManager.projectList[0] = new projectManager.project('Today');
projectManager.projectList[0].id = projectManager.idMaker(projectManager.projectList[0].title)

// test to-do item
projectManager.projectList[0].todoManager.todoList[0] = new todoManager.todoItem('Test1', 'Test1', 'Test1', 'Test1');
projectManager.projectList[0].todoManager.todoList[1] = new todoManager.todoItem('Test2', 'Test2', 'Test2', 'Test2');
projectManager.projectList[0].todoManager.todoList[2] = new todoManager.todoItem('Test3', 'Test3', 'Test3', 'Test3');

console.log(projectManager.projectList[0].todoManager.todoList[0]);

projectManager.projectList[0].todoManager.renderTodos();

projectManager.renderProjects();

projectManager.setCurrentProject(projectManager.projectList[0].id);