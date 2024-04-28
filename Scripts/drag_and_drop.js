// Ajoutez des gestionnaires d'événements pour chaque élément de livre draggable
document.querySelectorAll('.book').forEach(book => {
    book.addEventListener('dragstart', handleDragStart);
    book.addEventListener('dragover', handleDragOver);
    book.addEventListener('dragenter', handleDragEnter);
    book.addEventListener('dragleave', handleDragLeave);
    book.addEventListener('drop', handleDrop);
});

let draggedBook = null;

function handleDragStart(event) {
    draggedBook = event.target;
    event.dataTransfer.setData('text/plain', draggedBook.dataset.id);
}

function handleDragOver(event) {
    event.preventDefault();
}

function handleDragEnter(event) {
    event.preventDefault();
}

function handleDragLeave(event) {
    // Ajoutez ici tout code pour le style visuel (par exemple, changement de couleur lors du survol)
}

function handleDrop(event) {
    event.preventDefault();
    const targetBook = event.target;

    // Vérifiez si le drop est effectué sur un élément de livre valide
    if (targetBook.classList.contains('book')) {
        const sourceColumn = draggedBook.parentElement.id;
        const targetColumn = targetBook.parentElement.id;
        const bookId = event.dataTransfer.getData('text/plain');

        // Mettez à jour la base de données en fonction du drop
        moveBook(sourceColumn, targetColumn, bookId);

        // Mettez à jour l'interface utilisateur pour refléter les changements
        const clonedBook = draggedBook.cloneNode(true);
        targetBook.parentElement.appendChild(clonedBook);
        draggedBook.parentElement.removeChild(draggedBook);
    }
}

function moveBook(sourceColumn, targetColumn, bookId) {
    const sourceBooks = books[sourceColumn];
    const targetBooks = books[targetColumn];
    const bookIndex = sourceBooks.findIndex(book => book.id === parseInt(bookId));

    // Retirez le livre de la colonne source et ajoutez-le à la colonne cible
    const [movedBook] = sourceBooks.splice(bookIndex, 1);
    targetBooks.push(movedBook);

    // Mettez à jour l'interface utilisateur (enregistrez-vous)
}
