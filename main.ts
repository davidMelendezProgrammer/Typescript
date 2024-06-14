import { Tarea } from "./task";

const tareaForm: HTMLFormElement = document.getElementById('task-form') as HTMLFormElement;

const tareaInput: HTMLInputElement = document.getElementById('task-input') as HTMLInputElement;

const tareaList: HTMLUListElement = document.getElementById('task-list') as HTMLUListElement;

let tareas: Tarea[] = [];

function addTask(descripcion: string): void{
    const nuevaTarea: Tarea = new Tarea(descripcion);

    tareas.push(nuevaTarea);

    renderTareas();
}

function renderTareas(): void{
    tareaList.innerHTML = '';

    tareas.forEach(Tarea => {
        const li: HTMLLIElement = document.createElement('li');
        li.textContent = Tarea.descripcion;
        
        tareaList.appendChild(li);
    });
}

tareaForm.addEventListener('submit', event =>{
    event.preventDefault();
    const descripcion: string = tareaInput.value.trim();
    if(descripcion !== ''){
        addTask(descripcion);
        tareaInput.value = "";
    }
});

renderTareas();
