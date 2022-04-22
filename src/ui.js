import  Project  from "./project";


export default class UI {

//Initialize page and load saved content
  
  static loadHomePage() {
    //UI.loadProjects();
    UI.initPopUp();
  }

  static initPopUp() {
    const addBtn = document.getElementById('add-project-btn');
    addBtn.addEventListener('click', UI.initSubmitBtn);
  }

  static initSubmitBtn() {
    document.getElementById('form').style.display = 'block';
    const submitBtn = document.getElementById('submit-btn');
    submitBtn.addEventListener('click', UI.addProject);
    
}

//Create project content
  
  static addProject() {
    
    const title = document.getElementById('title').value;
  
    
    const newProject = new Project(title);
    
    document.getElementById('form').style.display = 'none';
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

 static createTask(task, date) {
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

  
  
  
  // Create task event listeners
  
  static addTask() {
    const inputValue = document.getElementById('todotext').value
    const task = inputValue

    if (task === '') {
      alert('Please enter a task for the list!');
      return;
    }
    
    UI.createTask(task, 'no date')
  }





};