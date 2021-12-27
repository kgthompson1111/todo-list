import './style.css';

import { projectFactory } from './projectManager.js';

const projectManager = new projectFactory();

// function task(title, description, dueDat]e, isDone) {
//     this.title = title;
//     this.description = description;
//     this.dueDate = dueDate;
//     this.isDone = isDone;
// }

// populate project list
projectManager.projectList[0] = new projectManager.project('Example1');
projectManager.projectList[1] = new projectManager.project('Example2');
projectManager.projectList[2] = new projectManager.project('Example3');

projectManager.renderProjects();