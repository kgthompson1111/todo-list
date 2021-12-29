import './style.css';

import { projectFactory } from './projectManager.js';
import { todoFactory } from './todoManager.js';

// initiate projectManager called projectFactory
const projectManager = new projectFactory();
// initiate todoFactory called todoManager
const todoManager = new todoFactory();

// populate project list and set current project
projectManager.projectList[0] = new projectManager.project('Life');
projectManager.projectList[0].id = projectManager.idMaker(projectManager.projectList[0].title)

// test to-do item
projectManager.projectList[0].todoManager.todoList[0] = new todoManager.todoItem('Feed cats', 'Feed the kitties!', '', false, false);
projectManager.projectList[0].todoManager.todoList[1] = new todoManager.todoItem('Study for exam', 'Study for upcoming exam', '2022-01-16', true, false);
projectManager.projectList[0].todoManager.todoList[2] = new todoManager.todoItem('Take out garbage', '', '', false, true);

projectManager.renderProjects();

projectManager.setCurrentProject(projectManager.projectList[0].id);

projectManager.projectList[0].todoManager.renderTodos();