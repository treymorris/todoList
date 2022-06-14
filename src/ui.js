import Project from "./project";
import LocalStorage from "./localStorage";
import Task from "./task";

export default class UI {
  //Initialize page and load saved content

  static loadHomePage() {
    UI.loadProjects();
    UI.initProjectBtns();
    UI.loadOneProject('Current');
    document.addEventListener("keydown", UI.handleKeyboard);
  }

  static loadProjects() {
    LocalStorage.getTodoList()
      .getProjects()
      .forEach((project) => {
        if (
          project.title !== "Current" &&
          project.title !== "Today" &&
          project.title !== "This Week"
        ) {
          UI.createProjectList(project.title);
        }
      });
    UI.initProjectBtns();
  }

  static loadOneProject(name) {
    LocalStorage.getTodoList()
      .getProjects()
      .forEach((project) => {
        if (project.title === name) {
          UI.createProjectCard(project);
        }
      });
  }

  //Create project content

  static addProject() {
    const title = document.getElementById("title").value;

    if (title === "") {
      alert("Please enter a name for the Project!");
      return;
    }

    if (LocalStorage.getTodoList().contains(title)) {
      alert("There is already a project by that name.");
      return;
    }

    LocalStorage.addProject(new Project(title));
    UI.createProjectList(title);
    UI.clearForm();
  }

  static handleKeyboard(e) {
    if (e.key === "Enter") UI.addProject();
    if (e.key === "Escape") UI.clearForm();
  }

  static createProjectCard(project) {
    const cardAnchor = document.getElementById("content");
    const projectCard = document.createElement("form");
    const projectTitle = document.createElement("h2");
    const date = document.createElement("h6");
    const todoHeader = document.createElement("div");
    const todoText = document.createElement("h2");
    const inputText = document.createElement("input");
    const addBtn = document.createElement("SPAN");
    const list = document.createElement("ul");
    let tasks = project.tasks;
    

    projectCard.classList.add("project-card");
    projectTitle.classList.add("project-title");
    date.classList.add("project-title");
    todoHeader.classList.add("todo-header");
    addBtn.classList.add("add-btn");

    projectCard.id = 'project-card';
    projectTitle.textContent = "Project: " + project.title;
    date.textContent = "Created on: " + project.date;
    todoText.textContent = "Task List";
    inputText.type = "text";
    inputText.id = "todotext";
    inputText.placeholder = "task...";
    addBtn.id = "add";
    addBtn.textContent = "Add";
    list.id = "list";

    cardAnchor.appendChild(projectCard);
    projectCard.appendChild(projectTitle);
    projectCard.appendChild(date);
    projectCard.appendChild(todoHeader);
    todoHeader.appendChild(todoText);
    projectCard.appendChild(inputText);
    projectCard.appendChild(addBtn);
    todoHeader.appendChild(list);

    tasks.forEach((task) => {
      UI.createTask(project.title, task.name);
    });

    const add = document.getElementById("add");
    add.addEventListener("click", () => UI.addTask(project.title));
  }

  static createProjectList(name) {
    const projectList = document.getElementById("navbar");
    const project = document.createElement("button");
    project.classList.add("project-btn");
    projectList.appendChild(project);
    project.innerHTML = `${name}`;
    
    const span = document.createElement("SPAN");
    span.classList.add("close-project");
    span.textContent = "x";
    project.appendChild(span);

    const close = document.getElementsByClassName("close-project");
    let i;
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function () {
        const div = this.parentElement;
        div.style.display = "none";
        LocalStorage.deleteProject(name);
      };
    }

    project.addEventListener("click", () => {UI.clearCard(), UI.loadOneProject(`${name}`)});
  }

  static createTask(projectName, taskName) {
    const li = document.createElement("li");
    li.textContent = taskName;
    document.getElementById("list").appendChild(li);
    document.getElementById("todotext").value = "";

    const span = document.createElement("SPAN");
    span.classList.add("close");
    span.textContent = "x";
    li.appendChild(span);

    const close = document.getElementsByClassName("close");
    let i;
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function () {
        const div = this.parentElement;
        div.style.display = "none";
        LocalStorage.deleteTask(projectName, taskName);
      };
    }
    UI.addCheckMark();
  }

  static addCheckMark() {
    const list = document.querySelector("ul");
    list.addEventListener(
      "click",
      function (e) {
        if (e.target.tagName === "LI") {
          e.target.classList.toggle("checked");
        }
      },
      false
    );
  }

  static clearForm() {
    const titleInput = document.getElementById("title");
    titleInput.value = "";
    document.getElementById("form").style.display = "none";
  }

  static clearCard() {
    const cardAnchor = document.getElementById('content');
    cardAnchor.removeChild(cardAnchor.firstElementChild);
  }

  
  static addTask(projectName) {
    const taskName = document.getElementById("todotext").value;
    
    if (taskName === "") {
      alert("Please enter a task for the list!");
      return;
    }
    if (LocalStorage.getTodoList().getProject(projectName).contains(taskName)) {
      alert('Task names must be different!')
      taskName.value = ''
      return
    }
    
    LocalStorage.addTask(projectName, new Task(taskName))
    UI.createTask(projectName, taskName);
  }

  
  
  // Project event listeners
  
  static initProjectBtns() {
    const addBtn = document.getElementById("add-project-btn");
    const currentBtn = document.getElementById("current-btn");
    const todayBtn = document.getElementById("today-btn");
    const weekBtn = document.getElementById("week-btn");
    addBtn.addEventListener("click", UI.initAddProjectFormBtns);
    currentBtn.addEventListener("click", () => {UI.clearCard(), UI.loadOneProject("Current")});
    todayBtn.addEventListener("click", () => {UI.clearCard(), UI.loadOneProject("Today")});
    weekBtn.addEventListener("click", () => {UI.clearCard(), UI.loadOneProject("This Week")});
  }
  
  static initAddProjectFormBtns() {
    document.getElementById("form").style.display = "block";
    const submitBtn = document.getElementById("submit-project-btn");
    const cancelBtn = document.getElementById("cancel-project-btn");
    submitBtn.addEventListener("click", UI.addProject);
    cancelBtn.addEventListener("click", UI.clearForm);
    
  }
}
