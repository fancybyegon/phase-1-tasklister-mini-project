document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  const preAddedTasks = ["Wash the dishes", "Buy plants", "Finish assignment", "Read a novel", "Try a new makeup look", "Journaling" , "DIY crafts", "Tech research", "Attend an event", "Try a new recipe", "Go bike riding", "Go for a hike", "Spend time with friends", "Go see my boyfriend", "Wash clothes for my man", "Cook for my man", "Try a new restaurant", "Drink lots of water", "Practise affirmations", "Do a spa day out", "Listen to a podcast", "Do a random act of kindness", "Clean bed linens", "Declutter my closet", "Practice an instrument"];

  // Add pre-added tasks to the list
  preAddedTasks.forEach((task) => {
    const taskItem = document.createElement("li");
    taskItem.textContent = task;

    // Add a delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      taskItem.remove(); // Remove the task when the delete button is clicked
    });

    taskItem.appendChild(deleteButton);

    // Add the task to the task list
    taskList.appendChild(taskItem);
  });

  // Add event listener to the form
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the form from submitting and refreshing the page

    // Get the input value
    const taskDescription = document.getElementById("new-task-description").value;

    // Check if the input is not empty
    if (taskDescription.trim() === "") {
      alert("Task description cannot be empty!");
      return;
    }

    // Create a new task element
    const taskItem = document.createElement("li");
    taskItem.textContent = taskDescription;

    // Add a delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      taskItem.remove(); // Remove the task when the delete button is clicked
    });

    // Append the delete button to the task item
    taskItem.appendChild(deleteButton);

    // Add the task to the task list
    taskList.appendChild(taskItem);

    // Clear the input field
    form.reset();
  });
});
