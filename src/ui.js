

function renderProjects() {
    const projects = [];
    for (i = 0; i < projects.length; i++) {
        createProjectCard();
    }
}

function addProject() {
    const addBtn = document.getElementById('add-project-button');
    addBtn.addEventListener('click', createProject);
};

function deleteProject() {

};

function createProjectCard() {

    const navbar = document.getElementsByClassName('navbar');
    
    const projectCard = document.createElement('form');
    projectCard.classList.add('project-card');
    navbar.appendChild(projectCard);

    const projectTitle = document.createElement('h2');
    projectTitle.classList.add('project-title');
    projectCard.appendChild(projectTitle);

    const todoHeader = document.createElement('div');
    todoHeader.classList.add('todo-header');
    projectTitle.appendChild(todoHeader);

    const todoText = document.createElement('h2');
    todoText.textContent = 'To Do List';
    todoHeader.appendChild(todoText);

    const inputText = document.createElement('input');
    inputText.type = 'text';
    inputText.id = 'todotext';
    inputText.placeholder = 'task...';
    todoText.appendChild(inputText);

    const addBtn = document.createElement('span');
    addBtn.classList.add('add-btn');
    addBtn.id = 'add';
    addBtn.textContent = 'Add';
    inputText.appendChild(addBtn);

    const list = document.createElement('ul');
    list.id = 'list';
    todoHeader.appendChild(list);

    renderMark();
    appendTasks();
};

function renderMark() {
    //Adds the x mark
    var myNodelist = document.getElementsByTagName("LI");
    var i;
for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}
};

function checked() {
    var list = document.querySelector('ul');
    list.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
        }
    }, false);
};


