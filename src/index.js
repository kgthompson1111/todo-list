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
projectManager.projectList[0] = new projectManager.project('Today');

projectManager.renderProjects();