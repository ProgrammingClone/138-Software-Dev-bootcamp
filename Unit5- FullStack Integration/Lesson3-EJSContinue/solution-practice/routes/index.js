const express = require("express");
const products = require("../data/products");
const router = express.Router();

router.get("/products", (req, res) => {
  res.render("index", { products });
});

router.get("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const product = products.find((item) => item.id === id);

  if (!product) {
    return res.status(404).render("notfound", { productId: id });
  }

  const discountedPrice = product.discountPercentage
    ? product.price * (1 - product.discountPercentage / 100)
    : product.price;

  res.render("product", { product, discountedPrice });
});

module.exports = router;
