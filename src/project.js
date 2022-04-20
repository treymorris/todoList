

export default class Project {
   constructor(title, date) {
     this.title = title;
     this.date = date;
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

  dateFormatted() {
    return DateTime.fromJSDATE(this.dueDate).toLocaleString(DateTime.DATE_MED);
  }

  setTasks(tasks) {
    this.tasks = tasks;
  }

  getTasks() {
    return this.tasks;
  }

  getOneTask(taskTitle) {
    return this.tasks.find((task) => task.getTitle() === taskTitle);
  }

  addOneTask(newTask) {
    if (this.tasks.find((task) => task.getTitle() === newTask.title)) return
    this.tasks.push(newTask);
  }

  deleteTask(taskTitle) {
    this.tasks = this.tasks.filter((task) => task.title !== taskTitle)
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

};