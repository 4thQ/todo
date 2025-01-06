import { Task, tasks } from "./task";

function renderTask() {
  const taskForm = document.querySelector(".task-form");

  const form = new FormData(taskForm);

  let taskTitle = form.get("task-title");
  let taskPriority = form.get("task-priority");
  let taskDue = form.get("task-due");
  let taskNotes = form.get("task-notes");

  const task = new Task(taskTitle, taskPriority, taskDue, taskNotes);

  tasks.push(task);
  const addTask = document.querySelector(".add-task");
  addTask.innerHTML = ""; // Clear existing list items

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = `${task.title} | Priority: ${task.priority} | Due: ${task.due} | Notes: ${task.notes}`;
    addTask.appendChild(li);
  });
  taskForm.reset(); // Clear the form
}

export { renderTask };
