import Project from "./project";
import Task from "./task";
//import { compareAsc, toDate } from 'date-fns'

export default class TodoList {
  constructor() {
    this.projects = [];
    this.projects.push(new Project("Current"));
    this.projects.push(new Project("Today"));
    this.projects.push(new Project("This Week"));
  }

  setProjects(projects) {
    this.projects = projects;
  }

  getProjects() {
    return this.projects;
  }

  getProject(projectName) {
    return this.projects.find((project) => project.getTitle() === projectName);
  }

  contains(projectName) {
    return this.projects.some((project) => project.getTitle() === projectName);
  }

  addProject(newProject) {
    if (this.projects.find((project) => project.title === newProject.title))
      return;
    this.projects.push(newProject);
  }

  deleteProject(projectName) {
    const projectDelete = this.project.find(
      (project) => project.getTitle() === projectName
    );
    this.projects.splice(this.projects.indexOf(projectDelete), 1);
  }

  updateToday() {
    this.getOneProject("Today").tasks = [];
    this.projects.forEach((project) => {
      if (project.getTitle() === "Today" || project.getTitle() === "This Week")
        return;
      const today = project.getToday();
      today.forEach((task) => {
        const taskName = `${task.getName()} (${project.getTitle()})`;
        this.getOneProject("Today").addOneTask(
          new Task(taskName, task.getDate())
        );
      });
    });
  }

  updateWeek() {
    this.getProject("This Week").tasks = [];
    this.projects.forEach((project) => {
      if (project.getTitle() == "Taday" || project.getTitle() === "This Week")
        return;

      const week = project.getWeek();
      week.forEach((task) => {
        const taskName = `${task.getName()} (${project.getTitle()})`;
        this.getProject(
          "This Week".addOneTask(new Task(taskName, task.getDate()))
        );
      });
    });

    this.getProject("This Week").setTasks(
      this.getProject("This Week")
        .getTasks()
        .sort((taskA, taskB) =>
          compareAsc(
            toDate(new Date(taskA.getDateFormatted())),
            toDate(new Date(taskB.getDateFormatted()))
          )
        )
    );
  }
}
