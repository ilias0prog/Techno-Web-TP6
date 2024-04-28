function duplicateCard(card) {
    const new_card = document.createElement('div')
    new_card.classList.add('card')
    new_card.innerHTML = card.innerHTML
    card.parentElement.appendChild(new_card)
    addBehaviorToCard(new_card)
}


function addBehaviorToCard(card) {
    card.addEventListener('click', () => {
        duplicateCard(card)
    })

    card.addEventListener('contextmenu', (event) => {
        event.preventDefault()
        card.remove()
    })
}


function main() {
    console.log("Le contenu de la page (DOM) est chargé !")

    const cards = document.querySelectorAll(".card")

    for (let card of cards) {
        addBehaviorToCard(card)
    }
}

document.addEventListener('DOMContentLoaded', main)
