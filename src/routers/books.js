// Import data here...
const express = require('express')
const router = express.Router()

const data = require('../../data/index.js')
const {book1, book2, book3} = require('../../test/fixtures/bookData.js')

const findBook = (req, res) => {
    const bookId = Number(req.params.id);
  
    const foundBook = data.books.find((book) => book.id === bookId);
  
    if (!foundBook) {
      res
        .status(404)
        .json({ error: "A book with the provided ID does not exist" });
    }
  
    return foundBook;
  };

  let currentId = 4

// Write routes here...
router.get('/', (req, res) => {
    return res.json({books: data.books})
})

router.get('/:id', (req, res) => {
    const book = findBook(req, res) 

    return res.json({book})
})

router.post('/', (req, res) => {
    const body = book1

    const newBook = {
        id: ++currentId,
        ...body
    }

    data.books.push(newBook)

    return res.status(201).json({book: newBook})
})



module.exports = router