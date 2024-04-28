function duplicateCard(card) {
    const new_card = $(card).clone().appendTo($(card).parent())
    addBehaviorToCard(new_card)
}

function addBehaviorToCard(card) {
    $(card).on('click', function() {
        duplicateCard(this)
    });

    $(card).on('contextmenu', function(event) {
        event.preventDefault()
        $(this).remove()
    });
}

function main() {
    console.log("Le contenu de la page (DOM) est chargé !")

    $(".card").each(function() {
        addBehaviorToCard(this)
    })
}

$(document).ready(main)
