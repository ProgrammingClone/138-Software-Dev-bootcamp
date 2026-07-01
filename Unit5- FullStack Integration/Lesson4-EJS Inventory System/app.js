const express = require("express");
const booksRoutes = require("./routes/booksRoute");
const path = require("path");
const connectDB = require("./config/db");
const app = express();

connectDB();

const logRequest = (req, res, next) => {
  console.log(`Request made to ${req.url}`);
  next();
};

app.use(logRequest);

// Middleware
app.set("view engine", "ejs");

// Serve static files (CSS, JS)
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Redirect the root URL to the main books page.
// This prevents "Cannot GET /" when someone visits the home route directly.
app.get("/", (req, res) => {
  res.redirect("/api/books");
});

app.use("/api/books", booksRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
