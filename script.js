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
    let booksContainer = document.getElementById("books-container")
    while (booksContainer.innerText !== '') {

        booksContainer.innerText = ''
    }

    i = 0

    let deleteBookButton
    booksContainer = document.getElementById("books-container")

    

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
                myLibrary.splice(this.id[0], 1)
                console.log("after deletion, books:" + myLibrary.length)
                showBooksClick()
                    })


            bookDiv.appendChild(deleteBookButton)


        readCheckbox = document.createElement("input")
            readCheckbox.setAttribute("type", "checkbox")
            bookDiv.appendChild(readCheckbox)



        booksContainer.appendChild(bookDiv)


        i++
    }

    let parentDiv = document.getElementById("show-books-button")
    document.body.insertBefore(booksContainer, parentDiv)
})

