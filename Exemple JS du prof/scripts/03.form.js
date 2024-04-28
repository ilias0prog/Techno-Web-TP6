/**
 * Add a new task into the table.
 * @param {string} name - name of the task.
 * @param {string} description - description of the task. 
 * @param {boolean} isCompleted - true if completed, otherwise false.
 */
function addTask(name, description, isCompleted) {
    const table_body = document.querySelector("#tasks_table tbody")

    const new_row = document.createElement('tr')
    new_row.innerHTML += `<td>${name}</td>`
    new_row.innerHTML += `<td>${description}</td>`


    const completion_button = document.createElement('button')
    if (isCompleted) {
        completion_button.innerText = 'Complétée'
        completion_button.classList.add('btn', 'btn-sm', 'btn-success')
    } else {
        completion_button.innerText = 'En cours'
        completion_button.classList.add('btn', 'btn-sm', 'btn-danger')
    }
    const completion_button_td = document.createElement('td')
    completion_button_td.appendChild(completion_button)
    new_row.appendChild(completion_button_td)

    table_body.appendChild(new_row)
}


/**
 * Called when the user submits the form to add a task.
 * @param {SubmitEvent} event
 */
function onSubmitForm(event) {
    // Prevent the form from sending an HTTP request and
    // redirecting the user on another page.
    event.preventDefault()
    const form = event.target

    const name = form.querySelector('#name').value
    const description = form.querySelector('#description').value
    const isCompleted = form.querySelector('#completed').checked

    console.log({ name, description, isCompleted })
    addTask(name, description, isCompleted)

    // // There also simpler ways with default APIs of the browser
    // const form_data = new FormData(form)
    // console.log(form_data)
    // console.log(form_data.get('name'))
}

/**
 * Main function that is called when the DOM is loaded.
 */
function main() {
    const form = document.getElementById('new_task_form')
    form.addEventListener('submit', onSubmitForm)
}


document.addEventListener('DOMContentLoaded', main)
