const express = require("express");
const routes = require("./routes/index");
const path = require("path"); // internal nodejs module that you use to create path to a directory 
const app = express();

// Configure Express to use EJS templates.
// This allows `res.render('template', { data })` to render views in `views/`.
app.set("view engine", "ejs");

// Serve local CSS, JavaScript, and images from `public/`.
// Files in `public/` are available by URL path, such as `/css/style.css`.
app.use(express.static(path.join(__dirname, "public"))); 

// Route handlers for the app.
app.use("/", routes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
