const express = require("express");
const recipeRoutes = require("./routes/recipeRoutes");
const app = express();

// Middleware
app.set("view engine", "ejs");
app.use(recipeRoutes);


// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
