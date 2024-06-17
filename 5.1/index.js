const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json());
let books = [];
fs.readFile('books.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    books = JSON.parse(data);
});
app.get('/books', (req, res) => {
    res.json(books);
});
app.get('/books/:isbn', (req, res) => {
    const book = books.find(b => b.isbn === req.params.isbn);
    if (!book) return res.sendStatus(404);
    res.json(book);
});
app.post('/books', (req, res) => {
    const { isbn, title, year, author } = req.body;
    if (!isbn || !title || !year || !author) return res.sendStatus(422);
    const newBook = { isbn, title, year, author };
    books.push(newBook);
    res.json(newBook);
});
app.put('/books/:isbn', (req, res) => {
    const { isbn, title, year, author } = req.body;
    if (!isbn || !title || !year || !author) return res.sendStatus(422);
    const index = books.findIndex(b => b.isbn === req.params.isbn);
    if (index === -1) return res.sendStatus(404);
    const updatedBook = { isbn, title, year, author };
    books[index] = updatedBook;
    res.json(updatedBook);
});
app.delete('/books/:isbn', (req, res) => {
    const index = books.findIndex(b => b.isbn === req.params.isbn);
    if (index === -1) return res.sendStatus(404);
    books.splice(index, 1);
    res.sendStatus(204);
});
app.patch('/books/:isbn', (req, res) => {
    const index = books.findIndex(b => b.isbn === req.params.isbn);
    if (index === -1) return res.sendStatus(404);
    const book = books[index];
    const { isbn, title, year, author } = req.body;
    if (isbn) book.isbn = isbn;
    if (title) book.title = title;
    if (year) book.year = year;
    if (author) book.author = author;
    res.json(book);
});
app.listen(3000, () => console.log('Server running on port 3000'));
