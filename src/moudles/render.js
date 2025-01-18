import { tasks, Task, projects, CreateProject } from "./task";

function render() {
  addTaskToList();

  const taskList = document.querySelector(".add-task");
  //Clears exisitng form
  taskList.innerHTML = "";

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
    li.dataset.id = task.id; 
    // Store task id in data attribute
    taskList.appendChild(li);

    // editTask(li);
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

  if (taskProject !== "none") {
    const project = projects.find((proj) => proj.name === taskProject);
    if (project) {
      project.tasks.push(new Task(taskTitle, taskPriority, taskDue, taskNotes));

      console.log(projects);
    }
  } else {
    console.log("No project selected");
  }

  const task = new Task(taskTitle, taskPriority, taskDue, taskNotes);

  tasks.push(task);
  saveToLocalStorage();
  taskForm.reset(); 
  // Clear the form
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
    saveToLocalStorage();
  });
}

// function editTask(li) {
//   const editBtn = document.createElement("button");
//   editBtn.classList.add("edit-btn");
//   editBtn.textContent = "Edit";
//   li.appendChild(editBtn);
// }

function addProjectToList() {
  const projectForm = document.querySelector(".project-form");
  const form = new FormData(projectForm);
  let projectName = form.get("project-name");
  const project = new CreateProject(projectName);
  projects.push(project);
  saveToLocalStorage();
  projectForm.reset();
}
function addProjectToOption() {
  const projectDropdown = document.querySelector(".project-dropdown");
  projectDropdown.innerHTML = ""; 
  // Clear existing list items

  projects.forEach((project) => {
    const projectName = document.querySelector(".project-dropdown");

    const projectOption = document.createElement("option");
    projectOption.textContent = project.name;
    projectOption.value = project.name;

    projectName.append(projectOption);
  });
}

function renderProjects() {
  addProjectToList();
  addProjectToOption();

  const projectContent = document.querySelector(".project-content");
  projectContent.innerHTML = ""; 
  // Clear existing list items

  projects.forEach((project) => {
    const projectBtn = document.createElement("button");
    const removeProjectBtn = document.createElement("button");
    removeProjectBtn.classList.add("delete-project-btn");
    removeProjectBtn.textContent = "Remove";

    removeProjectBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const projectIndex = projects.findIndex(
        (proj) => proj.name === project.name
      );
      if (projectIndex > -1) {
        projects.splice(projectIndex, 1);
        const projectDropdown = document.querySelector(".project-dropdown");
        const optionToRemove = projectDropdown.querySelector(
          `option[value="${project.name}"]`
        );
        if (optionToRemove) {
          optionToRemove.remove();
        }
      }
      projectBtn.remove();
      removeProjectBtn.remove();
      saveToLocalStorage();
    });

    projectBtn.classList.add("li");
    projectBtn.textContent = project.name;
    projectBtn.addEventListener("click", () => renderProjectTasks(project)); // Wrap in anonymous function
    projectContent.append(projectBtn, removeProjectBtn);
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

    // editTask(li);
    removeTask(li);
  });
}

function renderAllTasks() {
  const allTasks = [];

  tasks.forEach((task) => {
    if (!allTasks.some((t) => t.id === task.id)) {
      allTasks.push(task);
    }
  });

  projects.forEach((project) => {
    project.tasks.forEach((task) => {
      if (!allTasks.some((t) => t.id === task.id)) {
        allTasks.push(task);
      }
    });
  });

  const taskList = document.querySelector(".add-task");
  taskList.innerHTML = ""; // Clear existing list items

  allTasks.forEach((task) => {
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

    // editTask(li);
    removeTask(li);
  });
}

function saveToLocalStorage() {
  localStorage.setItem("projects", JSON.stringify(projects));
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadFromLocalStorage() {
  const storedProjects = localStorage.getItem("projects");
  const storedTasks = localStorage.getItem("tasks");

  if (storedProjects) {
    projects.push(...JSON.parse(storedProjects));
  }

  if (storedTasks) {
    tasks.push(...JSON.parse(storedTasks));
  }
}
export {
  render,
  renderProjects,
  renderProjectTasks,
  saveToLocalStorage,
  loadFromLocalStorage,
  renderAllTasks,
};
