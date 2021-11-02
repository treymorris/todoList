import './style.css';

/*const taskManager = (function() {

    const projects = [];

    render();
    
    function render() {
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

    const add = document.getElementById("add");
    add.addEventListener('click', newElement);

    function addTask() {
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
    
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);
    
        for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = parentElement;
            div.style.display = "none";
            };
        };
    };

    function checked() {
        var list = document.querySelector('ul');
        list.addEventListener('click', function(ev) {
            if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
            }
        }, false);
    };

    function deleteTask() {
        var close = document.getElementsByClassName("close");
        var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = parentElement;
            div.style.display = "none";
            };
        };
    };
    

    

})();*/


//add a check symbol to a clicked item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

//create a close button and append to li
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

//click on close button to hide current item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

const add = document.getElementById("add");
add.addEventListener('click', newElement)
//create new li
function newElement() {
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
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      };
    };
  };

//render project list
const projects = [];


for (i = 0; i < projects.length; i++) {
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

    
}