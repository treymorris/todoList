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

  static addProject(e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('project-description').value;
    const dueDate = document.getElementById('due-date').value;
    const priority = document.getElementById('priority').value;
    const newProject = new Project(title, description, dueDate, priority);
    this.projects = [];
    this.projects.push(newProject);
    document.getElementById('form').style.display = 'none';
    UI.createProjectCard(newProject);
    
}

 static createProjectCard(newProject) {

    const formContainer = document.getElementById('popup-form');
    
    const projectCard = document.createElement('form');
    projectCard.classList.add('project-card');
    formContainer.appendChild(projectCard);

    const projectTitle = document.createElement('h2');
    projectTitle.classList.add('project-title');
    projectCard.appendChild(projectTitle);
    projectTitle.textContent = newProject.title;

    const description = document.createElement('p');
    description.id = 'description';
    projectTitle.appendChild(description);
    description.textContent = newProject.description;

    const todoHeader = document.createElement('div');
    todoHeader.classList.add('todo-header');
    description.appendChild(todoHeader);

    const todoText = document.createElement('h2');
    todoText.textContent = 'To Do List';
    todoHeader.appendChild(todoText);

    const inputText = document.createElement('input');
    inputText.type = 'text';
    inputText.id = 'todotext';
    inputText.placeholder = 'task...';
    todoText.appendChild(inputText);

    const addBtn = document.createElement('SPAN');
    addBtn.classList.add('add-btn');
    addBtn.id = 'add';
    addBtn.textContent = 'Add';
    todoText.appendChild(addBtn);

    const list = document.createElement('ul');
    list.id = 'list';
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
  list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
}

};

