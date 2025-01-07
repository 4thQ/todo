import { render, renderProjects, renderProjectTasks } from "./render";

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
    e.preventDefault();
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
    renderProjects();
    projectDialog.close();
  });

  const cancelBtn = document.querySelector(".cancel-btn");
  cancelBtn.addEventListener("click", (e) => {
    e.preventDefault();
    projectDialog.close();
  });
}

export { Dialog };
