"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var task_1 = require("./task");
var tareaForm = document.getElementById('task-form');
var tareaInput = document.getElementById('task-input');
var tareaList = document.getElementById('task-list');
var tareas = [];
function addTask(descripcion) {
    var nuevaTarea = new task_1.Tarea(descripcion);
    tareas.push(nuevaTarea);
    renderTareas();
}
function renderTareas() {
    tareaList.innerHTML = '';
    tareas.forEach(function (Tarea) {
        var li = document.createElement('li');
        li.textContent = Tarea.descripcion;
        tareaList.appendChild(li);
    });
}
tareaForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var descripcion = tareaInput.value.trim();
    if (descripcion !== '') {
        addTask(descripcion);
        tareaInput.value = "";
    }
});
renderTareas();
