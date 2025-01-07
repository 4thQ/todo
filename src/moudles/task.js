let tasks = [];
let projects = [];

class CreateProject {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  addTaskToProject(task) {
    this.tasks.push(task);
  }
}

class Task {
  constructor(title, priority, due, notes) {
    this.id = Date.now(); // Unique identifier
    this.title = title;
    this.priority = priority;
    this.due = due;
    this.notes = notes;
  }
}

export { tasks, Task, projects, CreateProject };
