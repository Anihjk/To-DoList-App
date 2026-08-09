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
          <span>${taskText}</span>
          <button
     class="delete-button">Delete</button>
     `;
         tasklist.appendChild(li);

         taskInput.value = "";

         const deleteButton =
    li.querySelector(".delete-button");

    deleteButton.addEventListener("click", function () {
        li.remove();
         });
      });

