<!DOCTYPE html>
<html>
<head>
 
</head>
<body>
  <h1>Task and Project Management App 📝</h1>
  <p>
    This is a simple task and project management application that allows users to create tasks and projects, and store them in the browser's local storage. The application ensures that tasks and projects are persisted across page reloads.
  </p>
  <p>*WESBITE IS LIVE*</p>

  <h2>Features</h2>
  <ul>
    <li>Create and manage tasks with title, priority, due date, and notes.</li>
    <li>Create and manage projects.</li>
    <li>Assign tasks to projects.</li>
    <li>Store tasks and projects in local storage.</li>
    <li>Load tasks and projects from local storage on page load.</li>
    <li>Mark tasks as completed.</li>
  </ul>

  <h2>Installation</h2>
  <ol>
    <li>Clone the repository:</li>
    <pre><code>git clone https://github.com/your-username/task-project-management-app.git</code></pre>
    <pre><code>cd task-project-management-app</code></pre>
    <li>Open the project in your preferred code editor (e.g., Visual Studio Code).</li>
    <li>Open <code>index.html</code> in your browser to run the application.</li>
  </ol>

  <h2>Usage</h2>
  <h3>Add a Project:</h3>
  <ol>
    <li>Click on the "Add Project" button.</li>
    <li>Fill in the project name and submit the form.</li>
  </ol>

  <h3>Add a Task:</h3>
  <ol>
    <li>Click on the "Add Task" button.</li>
    <li>Fill in the task details (title, priority, due date, notes) and select a project (optional).</li>
    <li>Submit the form to add the task.</li>
  </ol>

  <h3>View Tasks:</h3>
  <ul>
    <li>Tasks are displayed in the task list.</li>
    <li>Tasks assigned to projects can be viewed by clicking on the project name.</li>
  </ul>

  <h3>Mark Task as Completed:</h3>
  <p>Click the checkbox next to a task to mark it as completed.</p>

  <h3>Remove Task:</h3>
  <p>Click the "Remove" button next to a task to delete it.</p>

  <h2>Project Structure</h2>
  <h3>Code Overview:</h3>
  <ul>
    <li><code>task.js</code>: Defines the <code>Task</code> and <code>CreateProject</code> classes and exports the tasks and projects arrays.</li>
    <li><code>render.js</code>: Handles rendering tasks and projects, adding tasks and projects, and saving/loading data to/from local storage.</li>
    <li><code>dom.js</code>: Handles the dialog interactions for adding tasks and projects.</li>
  </ul>

  <h2>Local Storage</h2>
  <p>
    The application uses the browser's local storage to persist tasks and projects. The data is saved in JSON format under the keys <code>tasks</code> and <code>projects</code>.
  </p>

  <h2>Bugs</h2>
  <p>The "Mark Task as Completed" feature is not functioning as expected.</p>

  <h2>What I Learned</h2>
  <p>
    Through this project, I learned how to use ES6 modules and classes effectively. However, I recognize that there is room for improvement, particularly in making the codebase more modular and maintaining cleaner, more readable code.
  </p>

  <h2>License</h2>
  <p>This project is licensed under the MIT License.</p>
</body>
</html>
