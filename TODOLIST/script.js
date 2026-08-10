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
          <span>${taskText}</span>
          <button
     class="delete-button">Delete</button>
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


         const deleteButton =
    li.querySelector(".delete-button");

     
    deleteButton.addEventListener("click", function () {
        li.remove();
         });
      });

