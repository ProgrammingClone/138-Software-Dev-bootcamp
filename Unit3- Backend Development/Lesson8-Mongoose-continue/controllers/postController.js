const Post = require("../models/Post");
const User = require("../models/User");

// Create a new post
const createPost = async (req, res) => {
  try {
    const { userId, title, content } = req.body;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: "User not found" });

    const post = new Post({ user: userId, title, content });
    await post.save();

    // Return the newly created post with the populated user field
    const populated = await Post.findById(post._id).populate(
      "user",
      "name email",
    );
    res.status(201).json(populated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const addComment = async (req, res) => {
  try {
    const { postId } = req.params;
    const { userId, body } = req.body;

    const post = await Post.findById(postId);
    if (!post) return res.status(404).json({ error: "Post not found" });

    // Push an embedded comment. We store the user ObjectId so we can populate it later.
    post.comments.push({ user: userId, body });
    await post.save();

    // Populate comments.user to return the full user info for each comment
    const populated = await Post.findById(postId).populate(
      "comments.user",
      "name email",
    );
    res.status(201).json(populated.comments.slice(-1)[0]); // return the newly added comment
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all posts with user details and populated embedded comment users
const getPosts = async (req, res) => {
  try {
    
    const posts = await Post.find().populate("comments.user", "name email");
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createPost, getPosts, addComment };
