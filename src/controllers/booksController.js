exports.get = (req, res, next) => {
    res.status(200).send({ allBooks: bookList })
}

exports.post = (req, res, next) => {
    const bookName = req.body.name
    if (bookList.includes(bookName)) return res.status(200).send({ success: false })
    bookList.push(bookName)
    res.status(201).send({ success: true })
}

exports.delete = (req, res, next) => {
    const bookToDelete = req.body.name
    bookList = bookList.filter((book) => book !== bookToDelete)
    res.status(200).send({ allBooks: bookList })
}

exports.put = (req, res, next) => {
    const bookToUpdate = req.body.nameToUpdate
    const updatedBook = req.body.updatedName
    const indexOfBookToUpdate = bookList.findIndex(
      (book) => book === bookToUpdate )
    if (indexOfBookToUpdate === -1) return res.status(200).send({ success: false })
    bookList[indexOfBookToUpdate] = updatedBook
    return res.status(200).send({ success: true })
}


let bookList = [
    'O alquimista',
    'Ansiedade',
]


//const users = [{
//    id: 1,
//    name: "Mateus",
//    email: "mateuswb@wolbec.com",
//    },
//    {
//    id: 2,
//    name: "Elliot de Chidambar",
//    email: "elliotc@wolbec.com",
//    },
//];