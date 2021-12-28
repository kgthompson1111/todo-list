(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(81),r=n.n(o),i=n(645),d=n.n(i)()(r());d.push([e.id,":root {\n    --light1: #EFBCD5FE;\n    --light2: #BE97C6;\n    --med1: #8661C1;\n    --med2: #4B5267;\n    --dark1: #2E294E;\n}\n\n* {\n    margin: 0;\n    font-family: sans-serif;\n}\n\n\nh1 {\n    font-size: 48px;\n    color: var(--light1);\n}\n\nh2 {\n    font-size: 36px;\n    color: var(--light1);\n}\n\nh1, h2 {\n    margin-top: 10px;\n}\n\n#content-holder {\n    width: 75%;\n    display: flex;\n\n    border: solid 3px var(--dark1);\n}\n\n#header-bar {\n    width: 75%;\n    height: 110px;\n\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n\n    background-color: var(--dark1);\n\n    margin-bottom: 20px;\n\n    border: solid 3px var(--dark1);\n}\n\n#container {\n    width: 100vw;\n    height: 100vh;\n    background-color: var(--light1);\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    padding: 50px 0px;\n}\n\n#projects {\n    width: 30%;\n    height: 100vh;\n    background-color: var(--med1);\n    padding: 0px 8px;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    overflow-y: scroll;\n}\n\n.projectItem {\n    width: 80%;\n    min-height: 60px;\n\n    background-color: var(--light2);\n\n    border: solid 3px var(--dark1);\n\n    font-size: 24px;\n    color: var(--dark1);\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 10px;\n    margin: 10px 0px;\n}\n\n.todoItem {\n    width: 90%;\n    min-height: fit-content;\n\n    background-color: var(--light2);\n\n    border: solid 3px var(--dark1);\n\n    color: var(--dark1);\n\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    align-items: center;\n    padding: 10px 20px;\n    margin: 10px 0px;\n}\n\n#highPriorityText {\n    color: var(--dark1);\n    font-weight: 800;\n}\n\n.highPriorityItem {\n    background-color: rgb(216, 84, 84);\n}\n\n.todoContent {\n    width: 100%;\n}\n\nlabel {\n    display: inline-block;\n    width: 300px;\n    margin: 5px 0px;\n    float: left;\n    font-size: 18px;\n}\n\ninput {\n    width: 100%;\n}\n\n.todoTitle, #titleInput {\n    font-size: 24px;\n    font-style: italic;\n    font-weight: 800;\n}\n\n#titleInput, #descriptionInput, #dueDateInput {\n    background-color: var(--light2);\n}\n\n#highPriorityLabel {\n    display: flex;\n    gap: 10px;\n}\n\n#highPriorityInput {\n    width: 24px;\n    height: 24px;\n    padding-left: 15px;\n    background-color: var(--light2);\n}\n\n#titleLabel, #descriptionLabel, #dueDateLabel, #highPriorityLabel {\n    width: 100%;\n    padding-bottom: 12px;\n}\n\n.todoDescription {\n    font-size: 14px;\n}\n\n.todoDueDate, #dueDateInput {\n    font-size: 18px;\n}\n\n.todoDueDate {\n    padding-bottom: 15px;\n}\n\n#submitTodoForm {\n    width: 100%;\n    height: 50px;\n    background-color: var(--light1);\n    border: solid 3px var(--dark1);\n    font-size: 24px;\n    color: var(--dark1);\n    font-weight: 800;\n}\n\n.clickable {\n    cursor: pointer;\n}\n\n#projectInputField {\n    width: 75%;\n    font-size: 24px;\n    color: var(--dark1);\n    background-color: var(--light2);\n}\n\n.activeProject {\n    box-shadow: 0px 0px 3px 3px rgba(255, 255, 255, 0.644);\n}\n\n#todos {\n    width: 70%;\n    height: 100vh;\n    background-color: var(--med2);\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    overflow-y: scroll;\n}\n\n.addButton, .deleteButton {\n    height: 30px;\n    width: 30px;\n    font-size: 24px;\n\n    margin-left: auto;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    font-family: sans-serif;\n\n    border: solid 3px var(--dark1);\n    color: var(--dark1);\n\n    cursor: pointer;\n}\n\n.addButton {\n    background-color: green;\n}\n\n.deleteButton {\n    background-color: red;\n}\n\n#addProjectButton:active, .deleteProjectButton:active {\n    background-color: var(--dark1);\n}",""]);const a=d},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var d={};if(o)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(d[c]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);o&&d[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),t.push(s))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},d=[],a=0;a<e.length;a++){var c=e[a],l=o.base?c[0]+o.base:c[0],s=i[l]||0,p="".concat(l," ").concat(s);i[l]=s+1;var u=n(p),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(h);else{var f=r(h,o);o.byIndex=a,t.splice(a,0,{identifier:p,updater:f,references:1})}d.push(p)}return d}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var d=0;d<i.length;d++){var a=n(i[d]);t[a].references--}for(var c=o(e,r),l=0;l<i.length;l++){var s=n(i[l]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}i=c}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),i=n(569),d=n.n(i),a=n(565),c=n.n(a),l=n(216),s=n.n(l),p=n(589),u=n.n(p),h=n(426),f={};let m;f.styleTagTransform=u(),f.setAttributes=c(),f.insert=d().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=s(),t()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;const v=[];function g(){const e=[];function t(e,t,n,o,r){this.title=e,this.dueDate=n,this.description=t,this.isHighPriority=o}function n(){newTodoCard.removeChild(addTodoButton),function(){const e=document.createElement("div");e.innerText="-",e.id="hideTodoButton",e.classList.add("deleteButton"),newTodoCard.appendChild(e),e.addEventListener("click",o)}();const e=document.createElement("label");e.id="titleLabel",e.for="titleInput",e.innerText="Task ",e.classList.add("label");const t=document.createElement("input");t.id="titleInput",t.type="text",e.appendChild(t),newTodoCard.appendChild(e);const n=document.createElement("label");n.id="dueDateLabel",n.for="dueDateInput",n.innerText="Due Date ",n.classList.add("label","todoDueDate");const r=document.createElement("input");r.id="dueDateInput",r.type="date",n.appendChild(r),newTodoCard.appendChild(n);const i=document.createElement("label");i.id="descriptionLabel",i.for="descriptionInput",i.innerText="Description ",i.classList.add("label");const d=document.createElement("input");d.id="descriptionInput",d.type="text",i.appendChild(d),newTodoCard.appendChild(i);const c=document.createElement("label");c.id="highPriorityLabel",c.for="highPriorityInput",c.innerText="High Priority? ",c.classList.add("label");const l=document.createElement("input");l.id="highPriorityInput",l.type="checkbox",c.appendChild(l),newTodoCard.appendChild(c);const s=document.createElement("button");s.id="submitTodoForm",s.innerText="Submit",s.addEventListener("click",a),newTodoCard.appendChild(s)}function o(){console.log(newTodoCard),newTodoCard.removeChild(titleLabel),newTodoCard.removeChild(dueDateLabel),newTodoCard.removeChild(descriptionLabel),newTodoCard.removeChild(highPriorityLabel),newTodoCard.removeChild(submitTodoForm),newTodoCard.removeChild(hideTodoButton),r()}function r(){const e=document.createElement("div");e.innerText="+",e.id="addTodoButton",e.classList.add("addButton"),newTodoCard.appendChild(e),e.addEventListener("click",n)}function i(){const e=document.createElement("div");e.classList.add("todoItem"),e.id="newTodoCard",todos.appendChild(e),r()}function d(e){let t=e+"todoid"+Math.floor(3e3*Math.random()),n=t.replace(/ /g,"");return t=n.toLowerCase(),t}function a(){const e=v.findIndex((e=>e.id==`${m}`));if(""==`${titleInput.value}`)return void alert("Task is a required field");if(""==`${dueDateInput.value}`)return void alert("Due date is a required field");console.log(dueDateInput.value);const n=new t(`${titleInput.value}`,`${descriptionInput.value}`,`${dueDateInput.value}`,!!highPriorityInput.checked);v[e].todoManager.todoList.push(n),v[e].todoManager.renderTodos()}return{todoList:e,todoItem:t,renderTodos:function(){if(null==!m)return;const t=document.getElementById(m);todos.innerHTML=`<h2 id="activeHeader">${t.firstChild.data} to-dos:`;const n=v.findIndex((e=>e.id==`${m}`));for(var o=0;o<v[n].todoManager.todoList.length;o++){const t=document.createElement("div");if(t.classList.add("todoItem"),t.id=d(v[n].todoManager.todoList[o].title),1==v[n].todoManager.todoList[o].isHighPriority){t.classList.add("highPriorityItem");const e=document.createElement("div");e.id="highPriorityText",e.textContent="Priority: High",t.appendChild(e)}const r=document.createElement("div");r.classList.add("todoContent","todoTitle"),r.innerText=e[o].title,t.appendChild(r);const i=document.createElement("div");i.classList.add("todoContent","todoDueDate"),i.innerText="due "+e[o].dueDate,t.appendChild(i);const a=document.createElement("div");a.classList.add("todoContent","todoDescription"),a.innerText=e[o].description,t.appendChild(a),todos.appendChild(t)}i()},appendTodoForm:i}}const x=new function(){function e(e,t){this.title=e,this.todoManager=new g}function t(e){let t=e+"projectid",n=t.replace(/ /g,"");return t=n.toLowerCase(),t}function n(){null!=m&&document.getElementById(m).classList.remove("activeProject")}function o(e){m=e;const t=document.getElementById(m);t.classList.add("activeProject"),activeHeader.innerText=`${t.firstChild.data} to-do:`}function r(e){n(),o(e.target.id);const t=v.findIndex((e=>e.id==`${m}`));v[t].todoManager.renderTodos()}function i(){if(projectInputField.value){if(!function(e){let t=projectInputField.value,n=t.replace(/ /g,"");t=n+"projectid";for(var o=0;o<v.length;o++)if(v[o].id==t)return alert("project must not be duplicate"),projectInputField.value="",!0;return!1}()){const r=projectInputField.value,i=t(projectInputField.value),d=new e(`${r}`);d.id=`${i}`,v.push(d),a(),n(),o(d.id);const c=v.findIndex((e=>e.id==`${m}`));v[c].todoManager.renderTodos()}}else alert("field must not be empty")}function d(e){if(!window.confirm("Are you sure? Deleting a project will remove all of the tasks."))return void e.stopPropagation();const t=e.target.parentNode.id,n=v.findIndex((e=>e.id==`${t}`)),o=document.getElementById(t);if(v[n].todoManager.todoList.splice(0,v[n].todoManager.todoList.length),m==v[n].id){const e=document.getElementById(m);todos.innerHTML=`<h2 id="activeHeader">${e.firstChild.data} to-dos:`,v[n].todoManager.appendTodoForm()}v.splice(n,1),e.target.parentNode.parentNode.removeChild(o),e.stopPropagation(),a(),0==v.length&&(todos.removeChild(todos.childNodes[1]),activeHeader.innerText="No project selected"),t==m&&(m=null)}function a(){for(var e=0;e<v.length;e++)v[e].id=t(v[e].title);projects.innerHTML="<h2>Projects</h2>",function(){for(var e=0;e<v.length;e++){const n=document.createElement("div");n.innerText=v[e].title,n.classList.add("projectItem"),n.classList.add("clickable"),n.id=t(v[e].title),projects.appendChild(n),n.addEventListener("click",r);const o=document.createElement("div");o.innerText="x",o.classList.add("deleteButton"),n.appendChild(o),o.addEventListener("click",d)}}(),function(){const e=document.createElement("div");e.classList.add("projectItem"),e.id="newProjectForm";const t=document.createElement("input");t.id="projectInputField",e.appendChild(t);const n=document.createElement("div");n.innerText="+",n.id="addProjectButton",n.classList.add("addButton"),e.appendChild(n),n.addEventListener("click",i),projects.appendChild(e)}()}return{project:e,projectList:v,currentProject:m,idMaker:t,activeProject:r,deleteProject:d,renderProjects:a,setCurrentProject:o,idMaker:t}},b=new g;x.projectList[0]=new x.project("Today"),x.projectList[0].id=x.idMaker(x.projectList[0].title),x.projectList[0].todoManager.todoList[0]=new b.todoItem("Project 1","Description","dueDate",!1,!1),x.projectList[0].todoManager.todoList[1]=new b.todoItem("Project 2","Description","dueDate",!0,!1),x.projectList[0].todoManager.todoList[2]=new b.todoItem("Project 3","Description","dueDate",!0,!1),x.renderProjects(),x.setCurrentProject(x.projectList[0].id),x.projectList[0].todoManager.renderTodos()})()})();