const express = require('express');
const app = express();
const PORT = 5005;
app.use(express.json());
// In-memory array of books
let books = [
    { id: 1, title: 'Wings of Fire', author: 'A.P.J. Abdul Kalam' },
    { id: 2, title: 'The Alchemist', author: 'Paulo Coelho' },
    { id: 3, title: 'Harry Potter', author: 'J.K. Rowling' }
];
// GET /books - Display all books
app.get('/books', (req, res) => {
    res.status(200).json(books);
});
// POST /books - Add a new book
app.post('/books', (req, res) => {
    const { id, title, author } = req.body;
    if (id == null || !title || !author) {
        return res.status(400).json({
            message: 'Please provide id, title, and author'
        });
    }
    if (books.some(book => book.id === Number(id))) {
        return res.status(409).json({
            message: 'Book ID already exists'
        });
    }
    const newBook = {
        id: Number(id),
        title,
        author
    };
    books.push(newBook);
    res.status(201).json({
        message: 'Book added successfully',
        book: newBook
    });
});
// PUT /books/:id - Update book details
app.put('/books/:id', (req, res) => {
    const id = Number(req.params.id);
    const book = books.find(b => b.id === id);
    if (!book) {
        return res.status(404).json({
            message: 'Book not found'
        });
    }
    const { title, author } = req.body;
    if (!title || !author) {
        return res.status(400).json({
            message: 'Please provide title and author'
        });
    }
    book.title = title;
    book.author = author;
    res.status(200).json({
        message: 'Book updated successfully',
        book
    });
});
// DELETE /books/:id - Delete a book
app.delete('/books/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = books.findIndex(b => b.id === id);
    if (index === -1) {
        return res.status(404).json({
            message: 'Book not found'
        });
    }
    const deletedBook = books.splice(index, 1)[0];
    res.status(200).json({
        message: 'Book deleted successfully',
        book: deletedBook
    });
});
// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
