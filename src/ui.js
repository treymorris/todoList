import  Project  from "./project";
//import LocalStorage from "./localStorage";

export default class UI {

//Initialize page and load saved content
  
  static loadHomePage() {
    //UI.loadProjects();
    UI.initAddProjectBtn();
  }

  // static loadProjects() {
  //   LocalStorage.getTodoList().getProjects().forEach()((project) => {
  //     if (project.name !== "Current" &&
  //         project.name !== 'Today' &&
  //         project.name !== 'This Week')
  //       {UI.createProject(project.name)}
  //   })
  //   UI.initAddProjectBtn()
  // }

  

  //Create project content
  
  static addProject() {
    
    const title = document.getElementById('title').value;
    
    if (title === '') {
      alert('Please enter a name for the Project!');
      return;
    }

    const newProject = new Project(title);
    
    UI.clearForm();
    UI.createProjectCard(newProject);
    
}

static createProjectCard(newProject) {
  
    const formContainer = document.getElementById('popup-form');
    const projectCard = document.createElement('form');
    const projectTitle = document.createElement('h2');
    const date = document.createElement('h6');
    const todoHeader = document.createElement('div');
    const todoText = document.createElement('h2');
    const inputText = document.createElement('input');
    const addBtn = document.createElement('SPAN');
    const list = document.createElement('ul');
    
    projectCard.classList.add('project-card');
    projectTitle.classList.add('project-title');
    date.classList.add('project-title');
    todoHeader.classList.add('todo-header');
    addBtn.classList.add('add-btn');
    
    projectTitle.textContent = 'Project: ' + newProject.title;
    date.textContent = 'Created on: ' + newProject.date;
    todoText.textContent = 'Task List';
    inputText.type = 'text';
    inputText.id = 'todotext';
    inputText.placeholder = 'task...';
    addBtn.id = 'add';
    addBtn.textContent = 'Add';
    list.id = 'list';
    
    formContainer.appendChild(projectCard);
    projectCard.appendChild(projectTitle);
    projectCard.appendChild(date);
    projectCard.appendChild(todoHeader);
    todoHeader.appendChild(todoText);
    projectCard.appendChild(inputText);
    projectCard.appendChild(addBtn);
    todoHeader.appendChild(list);
    
    const add = document.getElementById("add");
    add.addEventListener('click', UI.addTask);
  }
  
  static createTask(task) {
    const li = document.createElement("li");
    li.textContent = task;
    document.getElementById("list").appendChild(li);
    document.getElementById("todotext").value = "";
    
    
    const span = document.createElement("SPAN");
    span.classList.add("close");
    span.textContent = "x"
    li.appendChild(span);
    
    const close = document.getElementsByClassName("close");
    let i;
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        const div = this.parentElement;
        div.style.display = "none";
      };
    };
    UI.addCheckMark();
  }
  
  
  
  static addCheckMark() {
    var list = document.querySelector('ul');
    list.addEventListener('click', function (e) {
      if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
      }
    });
  };
  
  static clearForm() {
    document.getElementById('form').style.display = 'none';
  }
  
  
  // Create task event listeners
  
  static addTask() {

    const task = document.getElementById('todotext').value
    
    if (task === '') {
      alert('Please enter a task for the list!');
      return;
    }
    
    UI.createTask(task)
  }
  
  
  
  // Project event listeners
  
  static initAddProjectBtn() {
    const addBtn = document.getElementById('add-project-btn');
    addBtn.addEventListener('click', UI.initAddProjectBtns);
  }
  
  static initAddProjectBtns() {
    document.getElementById('form').style.display = 'block';
    const submitBtn = document.getElementById('submit-project-btn');
    const cancelBtn = document.getElementById('cancel-project-btn');
    submitBtn.addEventListener('click', UI.addProject);
    cancelBtn.addEventListener('click', UI.clearForm);
  }


};