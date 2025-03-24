document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  const preAddedTasks = ["Wash the dishes", "Buy plants", "Finish assignment", "Read a novel"];

  
  preAddedTasks.forEach((task) => {
    const taskItem = document.createElement("li");
    taskItem.textContent = task;

    
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      taskItem.remove(); 
    });

    taskItem.appendChild(deleteButton);

   
    taskList.appendChild(taskItem);
  });

 
  form.addEventListener("submit", (e) => {
    e.preventDefault(); 

   
    const taskDescription = document.getElementById("new-task-description").value;

   
    if (taskDescription.trim() === "") {
      alert("Task description cannot be empty!");
      return;
    }

    
    const taskItem = document.createElement("li");
    taskItem.textContent = taskDescription;
    
    
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      taskItem.remove(); 
    });

   
    taskItem.appendChild(deleteButton);

    
    taskList.appendChild(taskItem);

    
    form.reset();
  });
});
