let tasks = [];

function pushitem() {
    let taskInput = document.getElementById('box').value;
    if (taskInput) {
        tasks.push(taskInput);
        document.getElementById('box').value = '';
        displayTasks();
    } else {
        alert('Please enter a task.');
    }
}

function delitem() {
    if (tasks.length > 0) {
        tasks.pop();
        displayTasks();
    } else {
        alert('No tasks to remove.');
    }
}

function displayTasks() {
    let taskList = '<ul>';
    for (let i = 0; i < tasks.length; i++) {
        taskList += '<li>' + tasks[i] + '</li>';
    }
    taskList += '</ul>';
document.getElementById('demo').innerHTML = taskList;
    const displayElement=document.getElementById("cnt");
    displayElement.innerHTML="count="+tasks.length;
}

const person = {
    name: 'Alice',
    age: 25,
    job: 'Engineer'
};
function displayperson (){
    const values = Object.values(person);
    document.getElementById('b').innerHTML = "Name: "+person.name+"<br>Age: "+person.age+"<br> Job: "+person.job;
}


