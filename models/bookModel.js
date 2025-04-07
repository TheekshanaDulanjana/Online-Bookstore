const db = require('../config/db');

const Book = {
  getAll: callback => {
    db.query('SELECT * FROM books', callback);
  },
  getById: (id, callback) => {
    db.query('SELECT * FROM books WHERE id = ?', [id], callback);
  },
  getByTitle: (title, callback) => {
    db.query('SELECT * FROM books WHERE title = ?', [title], callback);
  },  
  create: (bookData, callback) => {
    db.query('INSERT INTO books SET ?', bookData, callback);
  }
};

module.exports = Book;
