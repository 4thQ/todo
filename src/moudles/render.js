import { tasks, Task, projects, CreateProject } from "./task";

function render() {
  addTaskToList();

  const taskList = document.querySelector(".add-task");
  taskList.innerHTML = ""; // Clear existing list items

  tasks.forEach((task) => {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    li.appendChild(checkbox);
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        taskContent.style.textDecoration = "line-through";
      } else {
        taskContent.style.textDecoration = "none";
      }
    });
    const taskContent = document.createElement("span");
    taskContent.innerHTML = `${task.title} | <strong>Priority:</strong> ${task.priority} | <strong>Due:</strong> ${task.due} | <strong>Notes:</strong> ${task.notes}`;
    li.appendChild(taskContent);
    li.dataset.id = task.id; // Store task id in data attribute
    taskList.appendChild(li);

    editTask(li);
    removeTask(li);
  });
}

function addTaskToList() {
  const taskForm = document.querySelector(".task-form");

  const form = new FormData(taskForm);

  let taskTitle = form.get("task-title");
  let taskPriority = form.get("task-priority");
  let taskDue = form.get("task-due");
  let taskNotes = form.get("task-notes");
  let taskProject = form.get("project-name");

  if (taskProject !== "") {
    const project = projects.find((proj) => proj.name === taskProject);
    if (project) {
      project.tasks.push(new Task(taskTitle, taskPriority, taskDue, taskNotes));

      console.log(projects);
    }
  }

  const task = new Task(taskTitle, taskPriority, taskDue, taskNotes);

  tasks.push(task);

  taskForm.reset(); // Clear the form
}

function removeTask(li) {
  const removeBtn = document.createElement("button");
  removeBtn.classList.add("delete-btn");
  removeBtn.textContent = "Remove";
  li.appendChild(removeBtn);

  removeBtn.addEventListener("click", () => {
    const taskId = li.dataset.id;
    const taskIndex = tasks.findIndex((task) => task.id == taskId);
    if (taskIndex > -1) {
      tasks.splice(taskIndex, 1);
    }
    li.remove();

    projects.forEach((project) => {
      const taskIndex = project.tasks.findIndex((task) => task.id == taskId);
      if (taskIndex > -1) {
        project.tasks.splice(taskIndex, 1);
      }
    });
  });
}

function editTask(li) {
  const editBtn = document.createElement("button");
  editBtn.classList.add("edit-btn");
  editBtn.textContent = "Edit";
  li.appendChild(editBtn);
}

function addProjectToList() {
  const projectForm = document.querySelector(".project-form");
  const form = new FormData(projectForm);
  let projectName = form.get("project-name");
  const project = new CreateProject(projectName);
  projects.push(project);

  projectForm.reset();
}
function addProjectToOption() {
  const projectDropdown = document.querySelector(".project-dropdown");
  projectDropdown.innerHTML = ""; // Clear existing list items

  projects.forEach((project) => {
    const projectName = document.querySelector(".project-dropdown");
    const projectOption = document.createElement("option");
    projectOption.textContent = project.name;
    projectOption.value = project.name;

    projectName.appendChild(projectOption);
  });
}

function renderProjects() {
  addProjectToList();
  addProjectToOption();

  const projectContent = document.querySelector(".project-content");
  projectContent.innerHTML = ""; // Clear existing list items

  projects.forEach((project) => {
    const projectBtn = document.createElement("button");
    projectBtn.classList.add("li");
    projectBtn.textContent = project.name;
    projectBtn.addEventListener("click", () => renderProjectTasks(project)); // Wrap in anonymous function
    projectContent.appendChild(projectBtn);
  });
}

function renderProjectTasks(project) {
  const taskList = document.querySelector(".add-task");
  taskList.innerHTML = ""; // Clear existing list items

  project.tasks.forEach((task) => {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    li.appendChild(checkbox);
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        taskContent.style.textDecoration = "line-through";
      } else {
        taskContent.style.textDecoration = "none";
      }
    });
    const taskContent = document.createElement("span");
    taskContent.innerHTML = `${task.title} | <strong>Priority:</strong> ${task.priority} | <strong>Due:</strong> ${task.due} | <strong>Notes:</strong> ${task.notes}`;
    li.appendChild(taskContent);
    li.dataset.id = task.id; // Store task id in data attribute
    taskList.appendChild(li);

    editTask(li);
    removeTask(li);
  });
}
export { render, renderProjects, renderProjectTasks };
