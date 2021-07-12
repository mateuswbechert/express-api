//Router definitions
const router = app => {
    app.get('/', (request, response) => {
        response.send({
            message: 'Node.js and Express REST API'
        });
    });

    app.get('/users', (request, response) => {
        response.send(users);
    });

    app.get('/books', (request, response) => {
        return response.json({ allBooks: bookList })
    });

    app.post('/books', (request, response) => {
        const bookName = request.body.name
        console.log(bookName)
        console.log(bookList)
        if (bookList.includes(bookName)) return response.json({ success: false })
        bookList.push(bookName)
        return response.json({ success: true })
    });

    app.delete('/books', (request, response) => {
        // We get the parameter 'name' from the body
        const bookToDelete = request.body.name
        // We create a new array with all elements different from the book to delete
        bookList = bookList.filter((book) => book !== bookToDelete)
        // We return the new list
        return response.json({ allBooks: bookList })
    });

    app.put('/books', (request, response) => {
        // We get the parameters 'nameToUpdate' and 'updatedName' from the body
        const bookToUpdate = request.body.nameToUpdate
        const updatedBook = request.body.updatedName
        
        // We search if the book to update is in the list
        const indexOfBookToUpdate = bookList.findIndex(
          (book) => book === bookToUpdate
        )
        
        // If it is not a book from the list, we return 'false'
        if (indexOfBookToUpdate === -1) return response.json({ success: false })
        
        // Otherwise, we replace the name and return 'true'
        bookList[indexOfBookToUpdate] = updatedBook
        return response.json({ success: true })
    })
}

const users = [{
    id: 1,
    name: "Mateus",
    email: "mateuswb@wolbec.com",
    },
    {
    id: 2,
    name: "Elliot de Chidambar",
    email: "elliotc@wolbec.com",
    },
];

let bookList = [
    'O alquimista',
    'Ansiedade',
]

// Export the router
module.exports = router;
