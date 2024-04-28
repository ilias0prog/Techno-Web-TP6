const addBehaviorToCard = (card) => {
    // Ensure each card has a unique ID
    const cardId = card.id || window.crypto.randomUUID()
    $(card).attr('id', cardId)

    $(card).on('dragstart', (event) => {
        event.originalEvent.dataTransfer.setData("card-id", cardId)
    })

    $(card).on('dragend', (event) => {
        event.preventDefault()
    })
}

const addBehaviorToPanel = (panel) => {
    $(panel).on('dragover', (event) => {
        event.preventDefault()
    })

    $(panel).on('drop', (event) => {
        event.preventDefault();
        const dragged_card_id = event.originalEvent.dataTransfer.getData("card-id");
        const card = $('#' + dragged_card_id);

        // Temporarily hide the card with fadeOut
        card.fadeOut(300, function () {
            // Move the card to the new panel
            card.appendTo($(event.target)).fadeIn(300)
        })
    })
};

const main = () => {
    // Enable dragging for cards and apply behaviors
    $(".card").attr('draggable', true).each(function () {
        addBehaviorToCard(this)
    })

    // Apply behavior to panels where we can drop cards
    $(".col.bg-light.border").each(function () {
        addBehaviorToPanel(this)
    })
}

$(document).ready(main)
