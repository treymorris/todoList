import Project from "./project";
import Task from "./task";
import TodoList from "./todolist";

export default class LocalStorage{

    static saveTodoList(data) {
        localStorage.setItem('todoList', JSON.stringify(data))
    }

    static getTodoList() {
        const todoList = Object.assign(new TodoList(), JSON.parse(localStorage.getItem('todoList')))

        todoList.setProjects(todoList.getProjects().map((project) => Object.assign(new Project(), project)))

        todoList.getProjects().forEach((project) => project.setTasks(project.getTasks().map((task) => Object.assign(new Task(), task))))
        
        return todoList
    }

    static addProject(project) {
        const todoList = LocalStorage.getTodoList()
        todoList.addProject(project)
        LocalStorage.saveTodoList(todoList)
    }

    static deleteProject(project) {
        const todoList = LocalStorage.getTodoList()
        todoList.deleteProject(project)
        LocalStorage.saveTodoList(todoList)
    }

    static addTask(project, task) {
        const todoList = LocalStorage.getTodoList()
        todoList.getProject(project).addTask(task)
        LocalStorage.saveTodoList(todoList)
    }

    static deleteTask(project, task) {
        const todoList = LocalStorage.getTodoList()
        todoList.getProject(project).deleteTask(task)
        LocalStorage.saveTodoList(todoList)
    }

    static updateTask(project, task, name) {
        const todoList = LocalStorage.getTodoList()
        todoList.getProject(project).getTasks(task).setName(name)
        LocalStorage.saveTodoList(todoList)
    }

    static setTaskDate(project, task, date) {
        const todoList = LocalStorage.getTodoList()
        todoList.getProject(project).getTasks(task).setDate(date)
        LocalStorage.saveTodoList(todoList)
    }

    static updateProjectToday() {
        const todoList = LocalStorage.getTodoList()
        todoList.updateProjectToday()
        LocalStorage.saveTodoList(todoList)
    }

    static updateProjectWeekly() {
        const todoList = LocalStorage.getTodoList()
        todoList.updateProjectWeekly()
        LocalStorage.saveTodoList(todoList)
    }

}