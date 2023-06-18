const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

let tasks = [];

function addTask(){
    const taskText = taskInput.value;

    if(taskText !== ''){
    const task = {
        id: Date.now(),
        text: taskText
    }
    tasks.push(task);

    taskInput.value = '';

    renderTaskList();
    }
}

function deleteTask(id){
    //remove this task from array
    tasks = tasks.filter(task => task.id !== id)

    renderTaskList();
    
}

function renderTaskList() {
    taskList.innerHTML = '';

    tasks.forEach(task => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
        <span>${task.text}</span>
        <div>
            <button onclick="deleteTask(${task.id})" >Delete</button>
        </div>
        `;
        taskList.appendChild(listItem);
    });
}
