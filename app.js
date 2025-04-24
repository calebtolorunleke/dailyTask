

function addTask() {
    const newTasked = document.getElementById('newTask').value
    const newTaskedzero = document.getElementById('newTask')

    console.log(newTasked)

    // const taskInput = getElementById('newTask')
    const newTask = document.getElementById('newTask').value.trim()


    if (newTask !== '') {
        const taskContainer = document.getElementById('taskContainer')
        const taskElement = document.createElement('li')
        taskElement.textContent = newTask
        taskContainer.appendChild(taskElement)

        newTaskedzero.value = ''
    } else {
        alert('Please enter a genuine task')
    }
}