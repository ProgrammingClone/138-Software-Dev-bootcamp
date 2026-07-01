const Book = require("../models/bookModel");
const renderWithLayout = require("../helpers/renderWithLayout");

// Render the home page with the list of books
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    renderWithLayout(res, "index", { books });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
};

// Render the issue-book page inside the shared layout
const renderIssuePage = (req, res) => {
  renderWithLayout(res, "issue");
};

// Render the return-book page inside the shared layout
const renderReturnPage = (req, res) => {
  renderWithLayout(res, "return");
};

// Create a new book
const createBook = async (req, res) => {
  const { tags, author, inventory, name } = req.body;

  const serialNumber = `SN-${Math.random().toString(36).substring(2, 9).toUpperCase()}`;
  try {
    const newBook = new Book({
      serialNumber,
      tags: tags.split(","),
      author,
      inventory,
      name,
    });

    const response = await newBook.save();
    res.status(201).json({ response, message: "Item saved successfully" });
    // res.redirect('/api/books/');
  } catch (err) {
    if (err.code === 11000) {
      // Duplicate key error code
      res
        .status(400)
        .json({ error: "Duplicate entry detected", details: err.message });
    } else {
      res
        .status(500)
        .json({ error: "Something went wrong", details: err.message });
    }
  }
};

// Issue a book
const issueBook = async (req, res) => {
  const { bookId, quantity } = req.body;

  try {
    const book = await Book.findById(bookId);
    // Check if enough inventory is available
    if (book.inventory < quantity) {
      return res.status(400).send("Not enough inventory to issue the book");
    }

    // $inc increases or decreases a field by a given amount.
    // Here, it subtracts the issued quantity from inventory and adds it to issued.
    // This is an atomic update, which means MongoDB performs it as one safe operation.
    // That avoids race conditions when two users update the same document at the same time.
    const updatedBook = await Book.findByIdAndUpdate(
      bookId,
      {
        $inc: { issued: quantity, inventory: -quantity },
      },
      { new: true }, // Return the updated document
    );
    res.status(200).json({ message: "Book Issued", response: updatedBook });
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

// Return a book
const returnBook = async (req, res) => {
  const { bookId, quantity } = req.body;

  try {
    const book = await Book.findById(bookId);

    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }

    if (book.issued < quantity) {
      return res
        .status(400)
        .json({ error: "Return quantity exceeds issued books" });
    }

    // This is also an atomic update.
    // MongoDB will apply the increase/decrease in one step, keeping the data consistent.
    const updatedBook = await Book.findByIdAndUpdate(
      bookId,
      { $inc: { issued: -quantity, inventory: quantity } },
      { new: true },
    );

    res
      .status(200)
      .json({ message: "Book returned successfully", response: updatedBook });
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

module.exports = {
  getAllBooks,
  renderIssuePage,
  renderReturnPage,
  createBook,
  issueBook,
  returnBook,
};
