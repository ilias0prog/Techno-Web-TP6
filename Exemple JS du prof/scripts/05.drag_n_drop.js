// Guide pour le drag&drop : https://www.w3schools.com/html/html5_draganddrop.asp

const addBehaviorToCard = (card) => {
    if (!card.id) {
        card.id = window.crypto.randomUUID()
    }

    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dragstart_event
    card.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData("card-id", event.target.id)
    })

    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dragend_event
    card.addEventListener('dragend', (event) => {
        event.preventDefault()
    })
}

const addBehaviorToPanel = (panel) => {
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dragover_event
    panel.addEventListener('dragover', (event) => {
        event.preventDefault()
    })

    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/drop_event
    panel.addEventListener('drop', (event) => {
        console.log(event)
        const dragged_card_id = event.dataTransfer.getData("card-id")
        console.log(dragged_card_id)

        event.target.appendChild(document.getElementById(dragged_card_id))
    })
}

const main = () => {
    const cards = document.querySelectorAll(".card")
    cards.forEach((card) => {
        card.setAttribute('draggable', true)
    })
    cards.forEach(addBehaviorToCard)

    const panels = document.querySelectorAll(".col.bg-light.border")
    panels.forEach(addBehaviorToPanel)
}

document.addEventListener('DOMContentLoaded', main)
