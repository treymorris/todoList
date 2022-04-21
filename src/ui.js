import  Project  from "./project";


export default class UI {

  static loadHomePage() {
    //UI.loadProjects();
    UI.initPopUp();

  }

  /*static loadProjects() {
    Storage.getToDoList()
    .getProjects()
    .forEach((project) => {
      if (
        project.name !== ""
      ) {
        UI.createProject(project.name)
      }
    })
  }*/

  static initPopUp() {
    const addBtn = document.getElementById('add-project-btn');
    addBtn.addEventListener('click', UI.initSubmitBtn);
  }

  static initSubmitBtn() {
    document.getElementById('form').style.display = 'block';
    const submitBtn = document.getElementById('submit-btn');
    submitBtn.addEventListener('click', UI.addProject);
    
}

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
    add.addEventListener('click', UI.newElement);
}

 static newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("todotext").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("list").appendChild(li);
    }
    document.getElementById("todotext").value = "";
    //add x mark for delete
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
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

  
  
};

