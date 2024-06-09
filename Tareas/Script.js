//Convierte los ids de HTML a constantes de Javascript
const taskInput = document.getElementById("task-input")
const addTaskBtn = document.getElementById("add-task-btn")
const taskList = document.getElementById("task-list")

let taskItem;

function addTask(){ //Esta función nos permite agregar una nueva tarea a la lista.
    const taskText = taskInput.value.trim() //Esta constante nos permite almacenar el texto que ingresamos.

    if(taskText !== ""){ //Esta condición nos permite verificar si es que el texto no está vacío.
        taskItem = document.createElement("li") //Si el texto no está vacío, creamos un nuevo elemento (li)
        taskItem.innerHTML = `<span>${taskText}</span><button class="delete-btn">Eliminar</button>` //Esta acción nos permite entrar al HTML y agregar un nuevo elemento que es el botón de eliminar por cada tarea de la lista.
        const deleteBtn = taskItem.querySelector(".delete-btn") //Esta constante realiza la acción del botón eliminar.
        deleteBtn.addEventListener("click", deleteTask) //Esta es la acción que realiza el botón eliminar al hacer click.
        taskList.appendChild(taskItem) //Esta línea de código agrega un nuevo elemento de lista a la lista representada por el elemento HTML (taskItem)
        taskInput.value = "" //Esta acción nos limpia el área donde agregamos el texto de una nueva tarea.
    }
}

function toggleComplete(){ //Esta función se utiliza para marcar una taera como completada.
    this.classList.toggle("complete")
}

function deleteTask(){ //Esta función complementa la acción de eliminar una tarea haciendo click en el botón de eliminar.
    this.parentElement.remove();
}

addTaskBtn.addEventListener("click", addTask) //Igual, esta línea complementa la acción del botón añadir una tarea haciendo click en el botón de añadir.
taskInput.addEventListener("keypress", function (e){ //Esta función nos permite agregar la taera al hacer click con enter
    if (e.key === "Enter"){
        addTask()
    }
})

taskList.addEventListener("click", function (e){ //Esta función nos permite hacer click en la etiqueta de la tarea y marcarla o desmarcarla como completada
    if(e.target.tagName === "SPAN"){
        e.target.classList.toggle("complete")
    }
})

taskList.addEventListener("click", function (e){ //Esta función verifica si el objetivo tiene el botón de eliminar y si es así...
    if (e.target.classList.contains("delete-btn")){ //Elimina el elemento de la lista que contiene la taera. 
        Identifier.parentElement.remove()
    }
})