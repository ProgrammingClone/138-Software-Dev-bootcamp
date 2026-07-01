const path = require("path");
const ejs = require("ejs");

// This helper creates a simple layout system for EJS
// Step 1: render the page view (for example, index.ejs) into a string.
// Step 2: pass that string into the shared layout file as the variable named body.
// Step 3: render the layout file so the page content appears inside the common structure.
const renderWithLayout = (res, viewName, data = {}) => {
  // __dirname points to the helpers folder.
  // We join it with .. to go up one folder, then into the views folder.
  // Example: if viewName is "index", the final path becomes:
  // /your-project/views/index.ejs
  const viewPath = path.join(__dirname, "..", "views", `${viewName}.ejs`);

  ejs.renderFile(viewPath, data, (err, bodyContent) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error rendering page");
    }

    // The layout file expects a variable called body.
    res.render("layout", { ...data, body: bodyContent });
  });
};

module.exports = renderWithLayout;
