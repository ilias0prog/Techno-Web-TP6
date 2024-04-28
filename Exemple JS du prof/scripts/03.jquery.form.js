function addTask(name, description, isCompleted) {
    const tableBody = $("#tasks_table tbody")
    const statusButton = $('<button>')
        .addClass('btn btn-sm')
        .addClass(isCompleted ? 'btn-success' : 'btn-danger')
        .text(isCompleted ? 'Complétée' : 'En cours')
    
    const newRow = $('<tr>')
        .append($('<td>').text(name))
        .append($('<td>').text(description))
        .append($('<td>').append(statusButton))

    tableBody.append(newRow)
}

function onSubmitForm(event) {
    event.preventDefault()
    const form = $(event.target)
    const name = form.find('#name').val()
    const description = form.find('#description').val()
    const isCompleted = form.find('#completed').prop('checked')

    console.log({ name, description, isCompleted })
    addTask(name, description, isCompleted)
}

$(document).ready(function() {
    $('#new_task_form').on('submit', onSubmitForm)
})