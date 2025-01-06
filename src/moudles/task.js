let tasks = [];

class Task {
  constructor(title, priority, due, notes) {
    this.title = title;
    this.priority = priority;
    this.due = due;
    this.notes = notes;
  }
}

export { tasks, Task };
