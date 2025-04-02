function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");
    let taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }
    
    let li = document.createElement("li");
    li.innerHTML = `${taskText} <button class='delete' onclick='deleteTask(this)'> <i class="fa-solid fa-trash"></i> </button>`;
    taskList.appendChild(li);
    taskInput.value = "";
}

function deleteTask(button) {
    button.parentElement.remove();
}