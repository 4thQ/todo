function Dialog() {
  const dialog = document.querySelector(".dialog");

  // Open dialog when "Add Task" button is clicked
  const addBtn = document.querySelector(".add-task-btn");
  addBtn.addEventListener("click", () => {
    dialog.showModal(); // Show the dialog
  });

  // Close dialog when "Close" button is clicked
  const closeBtn = document.querySelector(".close-btn");
  closeBtn.addEventListener("click", () => {
    dialog.close(); // Close the dialog
  });

  const submitBtn = document.querySelector(".submit-btn");
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e);
    dialog.close();
  });
}

export { Dialog };
