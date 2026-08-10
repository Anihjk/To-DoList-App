const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");


function saveTasks() {
    const tasks = [];

    document.querySelectorAll("#taskList li").forEach(function (li) {
        const taskText = li.querySelector(".task-text").textContent;
        const completed = li.querySelector(".task-checkbox").checked;

        tasks.push({
            text: taskText,
            completed: completed
        });
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}


function createTask(taskText, completed = false) {

    const li = document.createElement("li");

    li.innerHTML = `
        <input type="checkbox" class="task-checkbox">
        <span class="task-text">${taskText}</span>
        <button class="edit-button">Edit</button>
        <button class="delete-button">Delete</button>
    `;

    taskList.appendChild(li);

    const checkbox = li.querySelector(".task-checkbox");
    const taskTextElement = li.querySelector(".task-text");

    checkbox.checked = completed;

    if (completed) {
        taskTextElement.classList.add("completed");
    }


    // CHECKBOX
    checkbox.addEventListener("change", function () {

        taskTextElement.classList.toggle("completed");

        saveTasks();
    });


    // EDIT
    const editButton = li.querySelector(".edit-button");

    editButton.addEventListener("click", function () {

        const newTask = prompt(
            "Edit your task:",
            taskTextElement.textContent
        );

        if (newTask !== null && newTask.trim() !== "") {

            taskTextElement.textContent = newTask.trim();

            saveTasks();
        }
    });


    // DELETE
    const deleteButton = li.querySelector(".delete-button");

    deleteButton.addEventListener("click", function () {

        li.remove();

        saveTasks();
    });
}


// ADD TASK
addButton.addEventListener("click", function () {

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    createTask(taskText);

    taskInput.value = "";

    saveTasks();
});


// LOAD SAVED TASKS
const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

savedTasks.forEach(function (task) {

    createTask(task.text, task.completed);

});