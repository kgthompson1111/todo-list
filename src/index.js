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

projectManager.projectList[1] = new projectManager.project('Tomorrow');
projectManager.projectList[1].id = projectManager.idMaker(projectManager.projectList[0].title)

// test to-do item
projectManager.projectList[0].todoManager.todoList[0] = new todoManager.todoItem('Test1', 'Test1', 'Test1', true);
projectManager.projectList[0].todoManager.todoList[1] = new todoManager.todoItem('Test2', 'Test2', 'Test2', false);
projectManager.projectList[0].todoManager.todoList[2] = new todoManager.todoItem('Test3', 'Test3', 'Test3', true);

projectManager.projectList[1].todoManager.todoList[0] = new todoManager.todoItem('Test1', 'Test1', 'Test1', false);
projectManager.projectList[1].todoManager.todoList[1] = new todoManager.todoItem('Test2', 'Test2', 'Test2', true);
projectManager.projectList[1].todoManager.todoList[2] = new todoManager.todoItem('Test3', 'Test3', 'Test3', false);

projectManager.renderProjects();

projectManager.setCurrentProject(projectManager.projectList[0].id);

projectManager.projectList[0].todoManager.renderTodos();