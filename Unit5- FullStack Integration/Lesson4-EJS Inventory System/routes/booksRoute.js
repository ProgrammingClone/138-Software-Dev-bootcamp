const express = require("express");
const router = express.Router();
const {
  getAllBooks,
  renderIssuePage,
  renderReturnPage,
  createBook,
  issueBook,
  returnBook,
} = require("../controllers/bookController");

// Route to get all books
router.get("/", getAllBooks);

// Route to create new book
router.post("/create", createBook);

// Route to show the issue-book form page
router.get("/issue", renderIssuePage);
router.post("/issue", issueBook);

// Route to show the return-book form page
router.get("/return", renderReturnPage);
router.post("/return", returnBook);

module.exports = router;
