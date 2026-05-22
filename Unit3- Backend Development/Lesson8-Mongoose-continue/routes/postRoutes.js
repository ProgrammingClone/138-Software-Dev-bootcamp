const express = require("express");
const {
  createPost,
  getPosts,
  addComment,
} = require("../controllers/postController");

const router = express.Router();

// Route-level middleware: simple logger to demonstrate custom middleware usage.
const requestLogger = require("../middlewares/logger");
router.use(requestLogger);

router.post("/", createPost);
router.get("/", getPosts);
// Add an embedded comment to a post.
router.post("/:postId/comments", addComment);

module.exports = router;
