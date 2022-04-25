import Project from "./project"
import Task from "./task"
import { compareAsc, toDate } from 'date-fns'



export default class TodoList {
    constructor() {
        this.projects = []
        this.projects.push(new Project('Current'))
        this.projects.push(new Project('Today'))
        this.projects.push(new Project('This Week'))
    }
    
    setProjects(projects) {
        this.projects = projects
    }

    getProjects() {
        return this.projects
    }

    getOneProject(projectName) {
        return this.projects.find((project) => project.getName() === projectName)
    }

    contains(projectName) {
        return this.projects.some((project) => project.getName() === projectName)
    }

    addProject(newProject) {
        if (this.projects.find((project) => project.name === newProject.name))
            return
        this.projects.push(newProject)
    }

    deleteProject(projectName) {
        const project = this.project.find((project) => project.getName() === projectName)
        this.projects.splice(this.projects.indexOf(project), 1)
    }

    updateToday() {
        this.getOneProject('Today').tasks = []
        this.projects.forEach((project) => {
            if (project.getName() === 'Today' || project.getName() === 'This Week')
                return
            const today = project.getToday()
            today.forEach((task) => {
                const taskName = `${task.getName()} (${project.getName()})`
                this.getOneProject('Today').addOneTask(new Task(taskName, task.getDate()))
            })
        })
    }

    updateWeek() {
        this.getOneProject('This Week').tasks = []
        this.projects.forEach((project) => {
            if (project.getName() == 'Taday' || project.getName() === 'This Week')
                return
            
            const week = project.getWeek()
            week.forEach((task) => {
                const taskName = `${task.getName()} (${project.getName()})`
                this.getOneProject('This Week'.addOneTask(new Task(taskName, task.getDate())))
            })
        })

        this.getOneProject('This Week').setTasks(this.getOneProject('This Week').getTasks().sort((taskA, taskB) =>
            compareAsc(
                toDate(new Date(taskA.getDateFormatted())),
                toDate(new Date(taskB.getDateFormatted()))
        )))
    }



}


