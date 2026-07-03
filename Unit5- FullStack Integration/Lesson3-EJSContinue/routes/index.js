const express = require("express");
const recipes = require("../data/recipes");
const router = express.Router();

// Home route: Display full recipe list without server-side search/filter
router.get("/", (req, res) => {
  res.render("index", { recipes });
});

// Display one recipe by name
router.get("/recipe/:name", (req, res) => {
  const recipe = recipes.find((r) => r.name === req.params.name);
  if (!recipe) {
    return res.status(404).render("notfound");
  }
  res.render("recipe", { recipe });
});

module.exports = router;
