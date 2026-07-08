const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const authenticateToken = require("../middleware/auth");

// In-memory store for demo purposes
const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
];

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Generate JWT token
 *     tags:
 *       - Auth
 *     responses:
 *       200:
 *         description: Token generated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 */
router.post("/login", (req, res) => {
  const token = jwt.sign(
    { userId: 1, name: "Test User" },
    process.env.JWT_SECRET || "your_secret_key",
    { expiresIn: "1h" },
  );
  res.json({ token });
});

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     tags:
 *       - User
 *     responses:
 *       200:
 *         description: OK
 */
router.get("/users", (req, res) => {
  res.status(200).json({ data: users });
});

/**
 * @swagger
 * /user:
 *   post:
 *     summary: Create a user
 *     tags:
 *       - User
 *     security:
 *       - JWT: []
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Created
 */
router.post("/user", authenticateToken, (req, res) => {
  const newId = users.length ? users[users.length - 1].id + 1 : 1;
  const newUser = { id: newId, name: req.body.name };
  users.push(newUser);

  res.location(`/api/user/${newUser.id}`);
  res.status(201).json({ data: newUser });
});

/**
 * @swagger
 * /user/{id}:
 *   get:
 *     summary: Get user by ID
 *     tags:
 *       - User
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: OK
 */
router.get("/user/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) return res.status(400).json({ error: "Invalid ID" });

  const user = users.find((u) => u.id === id);
  if (!user) return res.status(404).json({ error: "User not found" });

  res.status(200).json({ data: user });
});

/**
 * @swagger
 * /user/{id}:
 *   put:
 *     summary: Update a user
 *     tags:
 *       - User
 *     security:
 *       - JWT: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: OK
 */
router.put("/user/:id", authenticateToken, (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) return res.status(400).json({ error: "Invalid ID" });

  const idx = users.findIndex((u) => u.id === id);
  if (idx === -1) return res.status(404).json({ error: "User not found" });

  users[idx] = { id, name: req.body.name };
  res.status(200).json({ data: users[idx] });
});

/**
 * @swagger
 * /user/{id}:
 *   delete:
 *     summary: Delete a user
 *     tags:
 *       - User
 *     security:
 *       - JWT: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: No Content
 */
router.delete("/user/:id", authenticateToken, (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) return res.status(400).json({ error: "Invalid ID" });

  const idx = users.findIndex((u) => u.id === id);
  if (idx === -1) return res.status(404).json({ error: "User not found" });

  users.splice(idx, 1);
  res.status(204).send();
});

module.exports = router;

/*
  Swagger JSDoc format (how to write route docs):

  - Use an `@swagger` block immediately above the route handler.
  - Start with the path, e.g. `/users:` then indent the HTTP method (`get:`, `post:`, etc.).
  - Provide `summary`, `tags`, and `description` to help readers.
  - Define `parameters` for path/query/header values (use `in: path|query|header`).
  - For request bodies, include a `requestBody` with `content` -> `application/json` -> `schema`.
    You can reference shared schemas with `$ref: '#/components/schemas/YourSchema'`.
  - Define `responses` with status codes and descriptions. Include `content` + `schema`
    if you want to show the response shape.
*/
