const express = require("express");
const recipes = require("../data/recipes"); // Import the recipes data
const router = express.Router();

// Route 1: Show all recipes
router.get("/", (req, res) => {
  res.render("index", { recipes }); // Pass recipes to the template
});

// Route for individual recipe details
router.get("/recipe/:name", (req, res) => {
  const recipe = recipes.find(r => r.name === req.params.name);
  if (!recipe) {
    return res.status(404).send("Recipe not found");
  }
  res.render("recipe", { recipe });
});


module.exports = router;