const express = require('express');
const router = express.Router();

const books = [
  { id: 1000, title: 'things fall apart', author: 'Chinua Achebe', isbn: '1234567890' },
];

router.get('/books', (req, res) => {
  res.json(books);
});

// Add more route handlers based on your tasks

module.exports = router;

