const { DateTime } = require("luxon");

export default class Project {
  constructor(title) {
    this.title = title;
    this.date = DateTime.now().toLocaleString(DateTime.DATE_MED);
    this.tasks = [];
  }

  setTitle(title) {
    this.title = title;
  }

  getTitle() {
    return this.title;
  }

  setDate(date) {
    this.date = date;
  }

  getDate() {
    return this.date;
  }

  setTasks(tasks) {
    this.tasks = tasks;
  }

  getTasks() {
    return this.tasks;
  }

  getTask(taskName) {
    return this.tasks.find((task) => task.getTitle() === taskName);
  }

  contains(taskName) {
    return this.tasks.some((task) => task.getName() === taskName)
  }

  addTask(newTask) {
    if (this.tasks.find((task) => task.getName() === newTask.name)) return;
    this.tasks.push(newTask);
  }

  deleteTask(taskTitle) {
    this.tasks = this.tasks.filter((task) => task.name !== taskTitle);
  }

  //make these work with luxon
  getToday() {
    return this.tasks.filter((task) => {
      const taskDate = new Date(task.dateFormatted());
      return isToday(toDate(taskDate));
    });
  }

  getWeek() {
    return this.tasks.filter((task) => {
      const taskDate = new Date(task.dateFormatted());
      return isThisWeek(subDays(toDate(taskDate), 1));
    });
  }
}
