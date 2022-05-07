"use strict";

let taskStatus = document.querySelector(".task_status");
/*valueMissing: возвращает true,
    если у элемента есть атрибут required, но не введено значенение*/
document.forms["add_task_form"]
    .elements.task
    .addEventListener("input", function () {
        // if (taskStatus.contains("task_status_active")) {
        //     taskStatus.remove("task_status_active")
        // }
        taskStatus.innerText = ""
        if (this.validity.valueMissing) {
            console.log(this.validity);
            this.nextElementSibling.innerText = "Необходимо ввести значение";
            return;
        }
        if (this.validity.tooShort) {
            this.nextElementSibling.innerText = `Минимальное количество символов ${this.minLength}`;
            return;
        }
        if (this.validity.tooLong) {
            this.nextElementSibling.innerText = `Максимальное количество символов ${this.maxLength}`;
            return;
        }
        this.nextElementSibling.innerText = "";
    });

document.forms["add_task_form"]
    .elements.date
    .addEventListener("input", function () {
        let userTaskDate = this.value
        if (Date.now() > Date.parse(userTaskDate)) {
            this.nextElementSibling.innerText = "С таким планированием далеко не уедешь!";
            return;
        }
        this.nextElementSibling.innerText = "";
    })



    let taskId = 0;
function addTask(event) {
    event.preventDefault();
    let task = this.elements.task.value;
    let about = this.elements.about.value;
    let dedLineDate = this.elements.date.value
    
    let taskInfo = {
        taskId: taskId,
        task: task,
        about: about,
        dedLineDate: dedLineDate
    }; // информация об одной задаче
    console.log(taskInfo)
    let tasks = localStorage.getItem("tasks");
    console.log(tasks);
    // если tasks не равен null, преобразовываем json строку
    // в массив объектов
    if (tasks) {
        tasks = JSON.parse(tasks);  
        taskInfo.taskId = tasks[tasks.length-1].taskId + 1;
    }
    // если tasks равен null, значит создаем пустой маcсив
    else {
        tasks = [];
        taskInfo.taskId=1;
    }
    tasks.push(taskInfo);
    taskStatus.innerText = "Задача успешно добавлена!"
    console.log(JSON.stringify(tasks));
    localStorage.setItem("tasks", JSON.stringify(tasks));
    this.reset()
    return taskId
}

document.forms["add_task_form"].addEventListener("submit", addTask);