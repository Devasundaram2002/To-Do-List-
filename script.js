
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task-button');
const taskList = document.getElementById('task-list');
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const li = document.createElement('li');
        li.classList.add('task-item');
        li.innerHTML = `${taskText} <button class="delete-button">Delete</button>`;
        taskList.appendChild(li);
        taskInput.value = '';
        li.querySelector('.delete-button').addEventListener('click', function() {
            li.remove();
        });
    }
}
addTaskButton.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});