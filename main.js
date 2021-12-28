(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>a});var o=t(81),r=t.n(o),i=t(645),d=t.n(i)()(r());d.push([e.id,":root {\n    --light1: #EFBCD5FE;\n    --light2: #BE97C6;\n    --med1: #8661C1;\n    --med2: #4B5267;\n    --dark1: #2E294E;\n}\n\n* {\n    margin: 0;\n    font-family: sans-serif;\n}\n\n\nh1 {\n    font-size: 48px;\n    color: var(--light1);\n}\n\nh2 {\n    font-size: 36px;\n    color: var(--light1);\n}\n\nh1, h2 {\n    margin-top: 10px;\n}\n\n#content-holder {\n    width: 75%;\n    display: flex;\n\n    border: solid 3px var(--dark1);\n}\n\n#header-bar {\n    width: 75%;\n    height: 110px;\n\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n\n    background-color: var(--dark1);\n\n    margin-bottom: 20px;\n\n    border: solid 3px var(--dark1);\n}\n\n#container {\n    width: 100vw;\n    height: 100vh;\n    background-color: var(--light1);\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    padding: 50px 0px;\n}\n\n#projects {\n    width: 30%;\n    height: 100vh;\n    background-color: var(--med1);\n    padding: 0px 8px;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    overflow-y: scroll;\n}\n\n.projectItem {\n    width: 80%;\n    min-height: 60px;\n\n    background-color: var(--light2);\n\n    border: solid 3px var(--dark1);\n\n    font-size: 24px;\n    color: var(--dark1);\n\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 10px;\n    margin: 10px 0px;\n}\n\n.todoItem {\n    width: 90%;\n    min-height: 60px;\n\n    background-color: var(--light2);\n\n    border: solid 3px var(--dark1);\n\n    color: var(--dark1);\n\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    align-items: center;\n    padding: 10px 20px;\n    margin: 10px 0px;\n}\n\n#highPriorityText {\n    color: var(--dark1);\n    font-weight: 800;\n}\n\n.highPriorityItem {\n    background-color: rgb(216, 84, 84);\n}\n\n.todoContent {\n    width: 100%;\n}\n\nlabel {\n    display: inline-block;\n    width: 300px;\n    margin: 5px 0px;\n    float: left;\n    font-size: 18px;\n}\n\ninput {\n    width: 100%;\n}\n\n.todoTitle, #titleInput {\n    font-size: 24px;\n    font-style: italic;\n    font-weight: 800;\n}\n\n#titleInput, #descriptionInput, #dueDateInput {\n    background-color: var(--light2);\n}\n\n#highPriorityLabel {\n    display: flex;\n    gap: 10px;\n}\n\n#highPriorityInput {\n    width: 24px;\n    height: 24px;\n    padding-left: 15px;\n    background-color: var(--light2);\n}\n\n#titleLabel, #descriptionLabel, #dueDateLabel, #highPriorityLabel {\n    width: 100%;\n    padding-bottom: 12px;\n}\n\n.todoDescription {\n    font-size: 14px;\n}\n\n.todoDueDate, #dueDateInput {\n    font-size: 18px;\n}\n\n.todoDueDate {\n    padding-bottom: 15px;\n}\n\n#submitTodoForm {\n    width: 100%;\n    height: 50px;\n    background-color: var(--light1);\n    border: solid 3px var(--dark1);\n    font-size: 24px;\n    color: var(--dark1);\n    font-weight: 800;\n}\n\n.clickable {\n    cursor: pointer;\n}\n\n#projectInputField {\n    width: 75%;\n    font-size: 24px;\n    color: var(--dark1);\n    background-color: var(--light2);\n}\n\n.activeProject {\n    box-shadow: 0px 0px 3px 3px rgba(255, 255, 255, 0.644);\n}\n\n#todos {\n    width: 70%;\n    height: 100vh;\n    background-color: var(--med2);\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    overflow-y: scroll;\n}\n\n.addButton, .deleteButton {\n    height: 30px;\n    width: 30px;\n    font-size: 24px;\n\n    margin-left: auto;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    font-family: sans-serif;\n\n    border: solid 3px var(--dark1);\n    color: var(--dark1);\n\n    cursor: pointer;\n}\n\n.addButton {\n    background-color: green;\n}\n\n.deleteButton {\n    background-color: red;\n}\n\n#addProjectButton:active, .deleteProjectButton:active {\n    background-color: var(--dark1);\n}",""]);const a=d},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var d={};if(o)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(d[c]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);o&&d[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),n.push(s))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var i={},d=[],a=0;a<e.length;a++){var c=e[a],l=o.base?c[0]+o.base:c[0],s=i[l]||0,p="".concat(l," ").concat(s);i[l]=s+1;var u=t(p),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(h);else{var m=r(h,o);o.byIndex=a,n.splice(a,0,{identifier:p,updater:m,references:1})}d.push(p)}return d}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var d=0;d<i.length;d++){var a=t(i[d]);n[a].references--}for(var c=o(e,r),l=0;l<i.length;l++){var s=t(i[l]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}i=c}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={id:o,exports:{}};return e[o](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=t(379),n=t.n(e),o=t(795),r=t.n(o),i=t(569),d=t.n(i),a=t(565),c=t.n(a),l=t(216),s=t.n(l),p=t(589),u=t.n(p),h=t(426),m={};let f;m.styleTagTransform=u(),m.setAttributes=c(),m.insert=d().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=s(),n()(h.Z,m),h.Z&&h.Z.locals&&h.Z.locals;const g=[];function v(){const e=[];function n(){newTodoCard.removeChild(addTodoButton),function(){const e=document.createElement("div");e.innerText="-",e.id="hideTodoButton",e.classList.add("deleteButton"),newTodoCard.appendChild(e),e.addEventListener("click",t)}();const e=document.createElement("label");e.id="titleLabel",e.for="titleInput",e.innerText="Task ",e.classList.add("label");const n=document.createElement("input");n.id="titleInput",n.type="text",e.appendChild(n),newTodoCard.appendChild(e);const o=document.createElement("label");o.id="dueDateLabel",o.for="dueDateInput",o.innerText="Due Date ",o.classList.add("label","todoDueDate");const r=document.createElement("input");r.id="dueDateInput",r.type="date",o.appendChild(r),newTodoCard.appendChild(o);const i=document.createElement("label");i.id="descriptionLabel",i.for="descriptionInput",i.innerText="Description ",i.classList.add("label");const d=document.createElement("input");d.id="descriptionInput",d.type="text",i.appendChild(d),newTodoCard.appendChild(i);const a=document.createElement("label");a.id="highPriorityLabel",a.for="highPriorityInput",a.innerText="High Priority? ",a.classList.add("label");const c=document.createElement("input");c.id="highPriorityInput",c.type="checkbox",a.appendChild(c),newTodoCard.appendChild(a);const l=document.createElement("button");l.id="submitTodoForm",l.innerText="Submit",newTodoCard.appendChild(l)}function t(){console.log(newTodoCard),newTodoCard.removeChild(titleLabel),newTodoCard.removeChild(dueDateLabel),newTodoCard.removeChild(descriptionLabel),newTodoCard.removeChild(highPriorityLabel),newTodoCard.removeChild(submitTodoForm),newTodoCard.removeChild(hideTodoButton),o()}function o(){const e=document.createElement("div");e.innerText="+",e.id="addTodoButton",e.classList.add("addButton"),newTodoCard.appendChild(e),e.addEventListener("click",n)}function r(){const e=document.createElement("div");e.classList.add("todoItem"),e.id="newTodoCard",todos.appendChild(e),o()}function i(e){let n=Math.floor(3e3*Math.random());console.log(n);let t=e+"todoid"+n,o=t.replace(/ /g,"");return t=o.toLowerCase(),t}return{todoList:e,todoItem:function(e,n,t,o,r){this.title=e,this.dueDate=t,this.description=n,this.isHighPriority=o},renderTodos:function(){null==!f&&console.log("no current project");const n=document.getElementById(f);todos.innerHTML=`<h2 id="activeHeader">${n.firstChild.data} to-dos:`;const t=g.findIndex((e=>e.id==`${f}`));for(var o=0;o<g[t].todoManager.todoList.length;o++){const n=document.createElement("div");if(n.classList.add("todoItem"),n.id=i(g[t].todoManager.todoList[o].title),1==g[t].todoManager.todoList[o].isHighPriority){n.classList.add("highPriorityItem");const e=document.createElement("div");e.id="highPriorityText",e.textContent="Priority: High",n.appendChild(e)}const r=document.createElement("div");r.classList.add("todoContent","todoTitle"),r.innerText=e[o].title,n.appendChild(r);const d=document.createElement("div");d.classList.add("todoContent","todoDueDate"),d.innerText="due "+e[o].dueDate,n.appendChild(d);const a=document.createElement("div");a.classList.add("todoContent","todoDescription"),a.innerText=e[o].description,n.appendChild(a),todos.appendChild(n)}r()},appendTodoForm:r}}const x=new function(){function e(e,n){this.title=e,this.todoManager=new v}function n(e){let n=e+"projectid",t=n.replace(/ /g,"");return n=t.toLowerCase(),n}function t(){null!=f&&document.getElementById(f).classList.remove("activeProject")}function o(e){f=e;const n=document.getElementById(f);n.classList.add("activeProject"),activeHeader.innerText=`${n.firstChild.data} to-do:`}function r(e){t(),o(e.target.id);const n=g.findIndex((e=>e.id==`${f}`));g[n].todoManager.renderTodos()}function i(){if(projectInputField.value){if(!function(e){let n=projectInputField.value,t=n.replace(/ /g,"");n=t+"projectid";for(var o=0;o<g.length;o++)if(g[o].id==n)return alert("project must not be duplicate"),projectInputField.value="",!0;return!1}()){const r=projectInputField.value,i=n(projectInputField.value),d=new e(`${r}`);d.id=`${i}`,g.push(d),a(),t(),o(d.id);const c=g.findIndex((e=>e.id==`${f}`));g[c].todoManager.renderTodos()}}else alert("field must not be empty")}function d(e){if(!window.confirm("Are you sure? Deleting a project will remove all of the tasks."))return void e.stopPropagation();const n=e.target.parentNode.id,t=g.findIndex((e=>e.id==`${n}`)),o=document.getElementById(n);if(g[t].todoManager.todoList.splice(0,g[t].todoManager.todoList.length),f==g[t].id){const e=document.getElementById(f);todos.innerHTML=`<h2 id="activeHeader">${e.firstChild.data} to-dos:`,g[t].todoManager.appendTodoForm()}g.splice(t,1),e.target.parentNode.parentNode.removeChild(o),e.stopPropagation(),a(),0==g.length&&(todos.removeChild(todos.childNodes[1]),activeHeader.innerText="No project selected"),n==f&&(f=null)}function a(){for(var e=0;e<g.length;e++)g[e].id=n(g[e].title);projects.innerHTML="<h2>Projects</h2>",function(){for(var e=0;e<g.length;e++){const t=document.createElement("div");t.innerText=g[e].title,t.classList.add("projectItem"),t.classList.add("clickable"),t.id=n(g[e].title),projects.appendChild(t),t.addEventListener("click",r);const o=document.createElement("div");o.innerText="x",o.classList.add("deleteButton"),t.appendChild(o),o.addEventListener("click",d)}}(),function(){const e=document.createElement("div");e.classList.add("projectItem"),e.id="newProjectForm";const n=document.createElement("input");n.id="projectInputField",e.appendChild(n);const t=document.createElement("div");t.innerText="+",t.id="addProjectButton",t.classList.add("addButton"),e.appendChild(t),t.addEventListener("click",i),projects.appendChild(e)}()}return{project:e,projectList:g,currentProject:f,idMaker:n,activeProject:r,deleteProject:d,renderProjects:a,setCurrentProject:o,idMaker:n}},b=new v;x.projectList[0]=new x.project("Today"),x.projectList[0].id=x.idMaker(x.projectList[0].title),x.projectList[0].todoManager.todoList[0]=new b.todoItem("Project 1","Description","dueDate",!1,!1),x.projectList[0].todoManager.todoList[1]=new b.todoItem("Project 2","Description","dueDate",!0,!1),x.projectList[0].todoManager.todoList[2]=new b.todoItem("Project 3","Description","dueDate",!0,!1),x.renderProjects(),x.setCurrentProject(x.projectList[0].id),x.projectList[0].todoManager.renderTodos()})()})();