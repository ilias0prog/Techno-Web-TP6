function IDAlreadyTaken(id, books) {
    for (let listKey in books) {
        let booksList = books[listKey];
        for (let i = 0; i < booksList.length; i++) {
            let book = booksList[i];
            if (book.id === id) {
                return true;
            }
        }
    }
    return false;
}

function generateID(books) {
    let newId = '';
    while(IDAlreadyTaken(newID, books) || newId === '') {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < 10; i++) {
            newId += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
    }
    return newId;
}

const books = {
    toBuy: [
        { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 9.99 },
        { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", price: 10.49 },
        { id: 3, title: "1984", author: "George Orwell", price: 8.99 },
        { id: 4, title: "The Catcher in the Rye", author: "J.D. Salinger", price: 11.99 },
        { id: 5, title: "Pride and Prejudice", author: "Jane Austen", price: 7.99 },
        { id: 6, title: "The Hobbit", author: "J.R.R. Tolkien", price: 12.99 },
        { id: 7, title: "The Lord of the Rings", author: "J.R.R. Tolkien", price: 15.99 },
        { id: 8, title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", price: 14.99 },
        { id: 9, title: "Animal Farm", author: "George Orwell", price: 6.99 },
        { id: 10, title: "The Alchemist", author: "Paulo Coelho", price: 10.99 }
    ],
    sold: [
        { id: 11, title: "To Kill a Mockingbird", author: "Harper Lee", price: 15.49 },
        { id: 12, title: "The Catcher in the Rye", author: "J.D. Salinger", price: 13.99 },
        { id: 13, title: "Pride and Prejudice", author: "Jane Austen", price: 11.99 },
        { id: 14, title: "The Hobbit", author: "J.R.R. Tolkien", price: 16.99 },
        { id: 15, title: "The Lord of the Rings", author: "J.R.R. Tolkien", price: 19.99 },
        { id: 16, title: "Harry Potter and the Chamber of Secrets", author: "J.K. Rowling", price: 16.99 },
        { id: 17, title: "The Da Vinci Code", author: "Dan Brown", price: 12.99 },
        { id: 18, title: "The Hunger Games", author: "Suzanne Collins", price: 14.99 },
        { id: 19, title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 11.99 },
        { id: 20, title: "1984", author: "George Orwell", price: 9.99 }
    ]
};



document.getElementById("addBookForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let price = parseFloat(document.getElementById("price").value);

    let id = generateUniqueId(books.toBuy);

    let newBook = {
        id: id,
        title: title,
        author: author,
        price: price
    };

    books.toBuy.push(newBook);

    alert("Nouveau livre ajouté avec succès !");

    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("price").value = "";
});


// Fonction pour afficher tous les livres dans les div correspondantes
function displayBooks() {
    // Récupérer les éléments div correspondants
    let toBuyDiv = document.getElementById("to_buy");
    let soldDiv = document.getElementById("sold");

    // Effacer le contenu des div pour éviter les doublons
    toBuyDiv.innerHTML = "";
    soldDiv.innerHTML = "";

    // Parcourir les listes de livres et créer les éléments HTML pour chaque livre
    for (let listKey in books) {
        let booksList = books[listKey];
        for (let i = 0; i < booksList.length; i++) {
            let book = booksList[i];
            // Créer un élément div pour le livre
            let bookDiv = document.createElement("p");
            bookDiv.classList.add("book");
            bookDiv.textContent = `${book.title} - ${book.author} (${book.price} €)`;

            // Ajouter le livre à la bonne liste
            if (listKey === "toBuy") {
                toBuyDiv.appendChild(bookDiv);
            } else if (listKey === "sold") {
                soldDiv.appendChild(bookDiv);
            }
        }
    }
}

// Appeler la fonction pour afficher les livres au chargement de la page
window.addEventListener("load", displayBooks);

