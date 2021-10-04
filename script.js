let myLibrary = []

class Book {

    constructor(title, author) {
      this.title = title
      this.author = author
      this.isRead = false
    }
  
    addToLibrary() {

        myLibrary.push(this)
    
    
    }
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
    let newBook
    let bookTitleField = document.getElementById('book-title-input')
    let bookAuthorField = document.getElementById('book-author-input')

    newBook = new Book(bookTitleField.value, bookAuthorField.value)
    newBook.addToLibrary()

    bookTitleField.value = ''
    bookAuthorField.value = ''
})

document.getElementById("show-books-button").addEventListener("click",
function showBooksClick() {
    console.log("show-books clicked")
    let booksContainer = document.getElementById("books-container")
    let booksTable = document.getElementById("books-table")

    while (booksTable.rows.length > 1) {
        console.log("bookstable rowlength:"+booksTable.rows.length)
        booksTable.deleteRow(1)
    }

    i = 0

    let deleteBookButton

    let row
    while (i < myLibrary.length) {
        row = booksTable.insertRow(i+1)
            titleCell = row.insertCell(0)
                titleCell.innerHTML = myLibrary[i].title
            authorCell = row.insertCell(1)
                authorCell.innerHTML = myLibrary[i].author
            deleteCell = row.insertCell(2)

            isReadCell = row.insertCell(3)


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


                deleteCell.appendChild(deleteBookButton)


        readCheckbox = document.createElement("input")
            readCheckbox.setAttribute("type", "checkbox")
            readCheckbox.setAttribute("id", i +"-checkbox")

            isReadCell.appendChild(readCheckbox)

            if (myLibrary[i].isRead) {
                document.getElementById(i + "-checkbox").checked = true;
            }
            else {
                console.log(myLibrary[i].title + 'is not read')
                document.getElementById(i + "-checkbox").checked = false;
                }

            readCheckbox.addEventListener('change', function() {
                if (this.checked) {
                    myLibrary[this.id[0]].isRead = true
                    console.log(myLibrary[this.id[0]].title + " is read: " + myLibrary[this.id[0]].isRead)
                } else {
                    myLibrary[this.id[0]].isRead = false
                    console.log(myLibrary[this.id[0]].title + " is read: " + myLibrary[this.id[0]].isRead)

                }
                })


        i++
    }

    let parentDiv = document.getElementById("show-books-button")
    document.body.insertBefore(booksContainer, parentDiv)
})

