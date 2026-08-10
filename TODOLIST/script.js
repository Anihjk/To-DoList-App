const taskInput =
document.getElementById("taskInput");
const addButton =
document.getElementById("addButton");
const tasklist =
document.getElementById("taskList");

addButton.addEventListener("click",function () {
    const taskText =
   taskInput.value.trim();

      if (taskText === "") {
        alert("Please enter a task.");
             return;
      }

      const li =
    document.createElement("li");

       li.innerHTML = `
          <input type="checkbox"
         class="task-checkbox">
          <span class= "task-text">${taskText}</span>
          <button
     class="delete-button">Delete</button>
          <button
      class="edit-button">Edit</button>
     `;
   
         tasklist.appendChild(li);

         taskInput.value = "";

         const checkbox =
     li.querySelector(".task-checkbox");
     const taskTextElement =
     li.querySelector(".task-text");

     checkbox.addEventListener("change",function () {
      taskTextElement.classList.toogle("completed")
     });


       const editButton =
   li.querySelector(".edit-button");

   editButton.addEventListener("click", function() {
      const newTask = prompt("Edit your task:", taskTextElement.textContent);
      
      if (newTask !== null &&
   newTask.trim() !== "")  {
          taskTextElement.textContent =
   newTask.trim();
   } 
   });


         const deleteButton =
    li.querySelector(".delete-button");

     
    deleteButton.addEventListener("click", function () {
        li.remove();
         });
      });

       