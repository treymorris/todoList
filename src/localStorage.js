import Project from "./project";
import Task from "./task";
import TodoList from "./todolist";

export default class LocalStorage {
  static saveTodoList(data) {
    localStorage.setItem("todoList", JSON.stringify(data));
  }

  static getTodoList() {
    const todoList = Object.assign(
      new TodoList(),
      JSON.parse(localStorage.getItem("todoList"))
    );

    todoList.setProjects(
      todoList
        .getProjects()
        .map((project) => Object.assign(new Project(), project))
    );

    todoList
      .getProjects()
      .forEach((project) =>
        project.setTasks(
          project.getTasks().map((task) => Object.assign(new Task(), task))
        )
      );

    return todoList;
  }

  static addProject(newProject) {
    const todoList = LocalStorage.getTodoList();
    todoList.addProject(newProject);
    LocalStorage.saveTodoList(todoList);
  }

  static deleteProject(projectName) {
    const todoList = LocalStorage.getTodoList();
    todoList.deleteProject(projectName);
    LocalStorage.saveTodoList(todoList);
  }

  static addTask(projectName, task) {
    const todoList = LocalStorage.getTodoList();
    todoList.getProject(projectName).addTask(task);
    LocalStorage.saveTodoList(todoList);
  }

  static deleteTask(projectName, taskName) {
    console.log('hello')
    const todoList = LocalStorage.getTodoList();
    todoList.getProject(projectName).deleteTask(taskName);
    LocalStorage.saveTodoList(todoList);
  }

  static updateTask(projectName, taskName, newTaskName) {
    const todoList = LocalStorage.getTodoList();
    todoList.getProject(projectName).getTasks(taskName).setName(newTaskName);
    LocalStorage.saveTodoList(todoList);
  }

  static setTaskDate(projectName, taskName, newDueDate) {
    const todoList = LocalStorage.getTodoList();
    todoList.getProject(projectName).getTasks(taskName).setDate(newDueDate);
    LocalStorage.saveTodoList(todoList);
  }

  static updateProjectToday() {
    const todoList = LocalStorage.getTodoList();
    todoList.updateProjectToday();
    LocalStorage.saveTodoList(todoList);
  }

  static updateProjectWeekly() {
    const todoList = LocalStorage.getTodoList();
    todoList.updateProjectWeekly();
    LocalStorage.saveTodoList(todoList);
  }
}
