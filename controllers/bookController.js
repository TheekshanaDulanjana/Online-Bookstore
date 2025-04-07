const Book = require('../models/bookModel');

exports.getAllBooks = (req, res) => {
  Book.getAll((err, results) => {
    if (err) {
      res.status(500).json({ error: 'Book Serching error' });
      return;
    }
    res.json(results);
  });
};

exports.getBookById = (req, res) => {
  const id = req.params.id;
  Book.getById(id, (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Book Serching error' });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ message: 'Can not find book' });
      return;
    }
    res.json(results[0]);
  });
};


exports.getBookByTitle = (req, res) => {
  const title = req.params.title;
  Book.getByTitle(title, (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Book search error' });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ message: 'Book not found' });
      return;
    }
    res.json(results[0]);
  });
};


exports.createBook = (req, res) => {
  const newBook = req.body;
  Book.create(newBook, (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Book adding error' });
      return;
    }
    res.status(201).json({ message: 'Succesfully added the new book', bookId: result.insertId });
  });
};
