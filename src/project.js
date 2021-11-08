

export default class Project {
   constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
};

/*let projects = [];

  function addProject() {

    //const title = document.getElementById('title').value;
    //const description = document.getElementById('project-description').value;
    //const dueDate = document.getElementById('due-date').value;
    //const priority = document.getElementById('priority').value;


    const newProject = new CreateNewProject(title, description, dueDate, priority);
    projects.push(newProject);
    console.log("halla");
    document.getElementById("form").style.display = "none";
    UI.createProjectCard(newProject);
}*/

