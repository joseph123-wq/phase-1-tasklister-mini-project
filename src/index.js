document.addEventListener("DOMContentLoaded", () => {
  const newTaskForm = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  newTaskForm.addEventListener("submit", (e) => {
    e.preventDefault(); 

  
    const newTaskDescription = document.getElementById("new-task-description").value;

    
    addTaskToList(newTaskDescription);

  
    document.getElementById("new-task-description").value = "";
  });

  function addTaskToList(description) {
    
    const listItem = document.createElement("li");

    
    listItem.innerHTML = `${description} <button class="remove-task">X</button>`;

    
    taskList.appendChild(listItem);

    
    const removeButton = listItem.querySelector(".remove-task");
    removeButton.addEventListener("click", () => {
      listItem.remove();
    });
  }
});


