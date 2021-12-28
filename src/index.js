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
projectManager.projectList[0].todoManager.todoList[0] = new todoManager.todoItem('Project 1', 'Description', 'dueDate', false, false);
projectManager.projectList[0].todoManager.todoList[1] = new todoManager.todoItem('Project 2', 'Description', 'dueDate', true, false);
projectManager.projectList[0].todoManager.todoList[2] = new todoManager.todoItem('Project 3', 'Description', 'dueDate', true, false);

projectManager.renderProjects();

projectManager.setCurrentProject(projectManager.projectList[0].id);

projectManager.projectList[0].todoManager.renderTodos();