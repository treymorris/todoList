const { DateTime } = require("luxon");

export default class Task {
  constructor(name, dueDate) {
    this.name = name;
    this.dueDate = dueDate;
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setDate(dueDate) {
    this.dueDate = dueDate;
  }

  getDate() {
    return this.dueDate;
  }

  dateFormatted() {
    return DateTime.fromJSDATE(this.dueDate).toLocaleString(DateTime.DATE_MED);
  }
}
