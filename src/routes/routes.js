const express = require('express');
const controller = require('../controllers/booksController')

//Router definitions
const router = app => {
    app.get('/books', controller.get)
    app.post('/books', controller.post)
    app.delete('/books', controller.delete)
    app.put('/books', controller.put)
}

module.exports = router;
