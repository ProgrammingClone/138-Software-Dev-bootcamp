const User = require("../models/User");

// Create a new user
const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all users with filtering, sorting, and pagination
const getUsers = async (req, res) => {
  try {
    // Extract query parameters from the request URL. These come from req.query
    // Example query: ?name=john&age=30&sortBy=age&order=desc&page=2&limit=5

    const {
      name,
      age,
      sortBy = "name",
      order = "asc",
      page = 2,
      limit = 2,
    } = req.query;

    // Build a MongoDB filter object. Start empty and add properties only when provided.
    const filter = {};
    // If a name was provided, create a case-insensitive regex to match partial names
    if (name) filter.name = new RegExp(name, "i"); // matches 'John' in 'john', 'Johnny', etc.
    // If age was provided, filter by exact age
    if (age) filter.age = age;

    // Determine sort direction: MongoDB uses 1 for ascending and -1 for descending
    const sortDirection = order === "asc" ? 1 : -1;
    // Build the sort object dynamically, e.g. { name: 1 } or { age: -1 }
    const sortOption = {};
    sortOption[sortBy] = sortDirection;

    const query = User.find(filter)
      .sort(sortOption)
      .skip((page - 1) * limit)
      .limit(Number(limit));
    if (req.query.includePosts === "true") {
      query.populate("posts");
    }
    const users = await query.exec();

    // Send the found users back to the client
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createUser, getUsers };
