import { createTask } from "./addTask.js";
import dateElement from './dateElement.js';

export const readTasks = () => {
    const list = document.querySelector("[data-list]");
    const taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    
    taskList.forEach((task) => {
        list.appendChild(createTask(task));
    })
}

