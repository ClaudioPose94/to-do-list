// Selecciona los elementos del DOM
const taskInput = document.getElementById('taskInput');
const taskButton = document.getElementById('taskButton');
const taskList = document.getElementById('taskList');

// Función para agregar una nueva tarea
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;

        // Función para marcar una tarea como completada
        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        // Función para eliminar una tarea
        li.addEventListener('dblclick', function() {
            li.remove();
        });

        taskList.appendChild(li);
        taskInput.value = ''; // Limpia el campo de entrada
    }
}

// Añade la tarea cuando se hace clic en el botón
taskButton.addEventListener('click', addTask);

// Permite añadir la tarea presionando la tecla "Enter"
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});


