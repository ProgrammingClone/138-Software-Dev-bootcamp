const express = require("express");
const {
  register,
  login,
  profile,
  logout,
} = require("../controllers/authController");
const { authMiddleware } = require("../middlewares/auth");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
// protected route - 
router.get("/me", authMiddleware, profile);
// router.put("/me", authMiddleware, updateProfile)

module.exports = router;
