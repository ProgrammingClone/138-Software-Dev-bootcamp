const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  serialNumber: { type: String, required: true, unique: true },
  name : {type: String, required: true, unique:true, trim: true},
  tags: { type: [String], required: true },
  author: { type: String, required: true },
  inventory: { type: Number, default: 0 },
  issued: { type: Number, default: 0 }, // Tracks how many books have been issued
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
