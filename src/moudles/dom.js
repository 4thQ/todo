import {
  render,
  renderProjects,
  renderProjectTasks,
  renderAllTasks,
} from "./render";

function Dialog() {
  const dialog = document.querySelector(".dialog");
  const projectDialog = document.querySelector(".project-dialog");

  // Open dialog when "Add Task" button is clicked
  const addBtn = document.querySelector(".add-task-btn");
  addBtn.addEventListener("click", () => {
    dialog.showModal(); // Show the dialog
  });

  // Close dialog when "Close" button is clicked
  const closeBtn = document.querySelector(".close-btn");
  closeBtn.addEventListener("click", () => {
    console.log("close");
    dialog.close(); // Close the dialog
  });

  const submitBtn = document.querySelector(".submit-btn");
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent form submission by default
    const taskForm = document.querySelector(".task-form");

    // Check if the form is valid
    if (!taskForm.checkValidity()) {
      taskForm.reportValidity(); // Display the browser's default validation messages
      return; // Stop further execution if form is invalid
    }

    // If the form is valid, proceed with rendering
    render();
    dialog.close();
  });

  const addProjectBtn = document.querySelector(".add-project-btn");
  addProjectBtn.addEventListener("click", (e) => {
    e.preventDefault();
    projectDialog.showModal();
  });

  const submitProjectBtn = document.querySelector(".submit-project-btn");
  submitProjectBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const projectForm = document.querySelector(".project-form");

    // Check if the form is valid
    if (!projectForm.checkValidity()) {
      projectForm.reportValidity(); // Show validation errors
      return; // Stop further execution if form is invalid
    }

    // If valid, proceed with adding the project
    renderProjects();
    projectDialog.close();
  });

  const cancelBtn = document.querySelector(".cancel-btn");
  cancelBtn.addEventListener("click", (e) => {
    e.preventDefault();
    projectDialog.close();
  });

  const allTasks = document.querySelector(".all-tasks-btn");
  allTasks.addEventListener("click", (e) => {
    e.preventDefault();
    renderAllTasks();
  });
}

export { Dialog };
