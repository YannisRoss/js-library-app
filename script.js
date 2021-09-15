let myLibrary = []



function Book(title, author) {
    this.title = title
    this.author = author
    this.read = false
}

function addBookToLibrary(book) {

    myLibrary.push(book)


}


function showBooks() {

    i = 0
    booksString = ""
    while (i < myLibrary.length) {

        booksString=booksString + (myLibrary[i].title + ", by " + myLibrary[i].author + '.\n')
        
        i++

    }
    return booksString

}



document.getElementById("new-book-button").addEventListener("click",
function() {

    let title = prompt("What is the book called?", "Title")
    let author = prompt("Who is the book's author?", "Author's name")
    addBookToLibrary(new Book(title, author))

})

document.getElementById("show-books-button").addEventListener("click",
function showBooksClick() {
    console.log("show-books clicked")
    let booksContainer = document.getElementsByClassName("books-container")
    while (booksContainer.length > 0) {

        booksContainer[0].remove()
    }

    i = 0

    let deleteBookButton
    booksContainer = document.createElement("div")
    booksContainer.setAttribute("class", "books-container")


    while (i < myLibrary.length) {

        bookDiv = document.createElement("div")
        bookDiv.setAttribute("class", "book-div")
        bookDiv.setAttribute("id", "book-div" + i)

        bookDiv.innerHTML = myLibrary[i].title + ", by " + myLibrary[i].author
        deleteBookButton = document.createElement("button")
        deleteBookButton.setAttribute("class", "delete-book-button")
        deleteBookButton.setAttribute("id", i + "-delete")
        deleteBookButton.innerHTML = "Delete"
        deleteBookButton.bookId = i

        deleteBookButton.addEventListener("click",
        function() {
            console.log("Books: " + myLibrary.length + ". delete clicked on" + this.id + ", " + myLibrary[this.id[0]].title)
            bookToDelete = this.book
            myLibrary.splice(this.id[0], 1)
            console.log("after deletion, books:" + myLibrary.length)
            showBooksClick()
                })


        bookDiv.appendChild(deleteBookButton)

        booksContainer.appendChild(bookDiv)


        i++
    }

    let parentDiv = document.getElementById("show-books-button")
    document.body.insertBefore(booksContainer, parentDiv)
})

