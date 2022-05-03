"use strict";

const deleteButton = document.querySelector(".delete_button")
let tasksSection = document.querySelector(".task-container");
let initialTasks = localStorage.getItem("tasks");

function renderTasks(tasks) {
    if (!tasks) {
        tasksSection.innerText = "В списке нет задач!";
    } else {
        tasks = JSON.parse(tasks);
        for (let task of tasks) {
            let taskContainer = document.createElement("div");
            taskContainer.classList.add("task_container")
            taskContainer.setAttribute("id", task.taskId)
            let taskTitle = document.createElement("h2");
            taskTitle.classList.add("task_title")
            taskTitle.innerText = task.task;
            let taskAbout = document.createElement("p");
            taskAbout.innerText = task.about;
            let date = document.createElement("p");
            date.innerText = task.dedLineDate;
            taskContainer.append(taskTitle, taskAbout, date)
            tasksSection.append(taskContainer);
        }
    }
}

renderTasks(initialTasks);

const taskItems = document.querySelectorAll(".task_container");

taskItems.forEach(taskItem => taskItem.addEventListener("click", function () {
    console.log(this)
    this.classList.toggle("task_container_active")
}))

deleteButton.addEventListener("click", function () {
    let tasksForDelete = document.querySelectorAll('.task_container_active');
    tasksForDelete.forEach((task) => deleteLocalStorage(task))
})

function deleteLocalStorage(elem) {
    let arr = JSON.parse(localStorage.getItem("tasks"));
    for (let item of arr) {
        if (item.taskId === Number(elem.id)) {
            let index = arr.indexOf(item)
            console.log(item);
            console.log(index);
            elem.remove();
            arr.splice(index, 1);
            localStorage.clear();
            localStorage.setItem("tasks", JSON.stringify(arr));
        }
    }
   
}
