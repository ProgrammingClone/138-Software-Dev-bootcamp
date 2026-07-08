import express from "express";
const router = express.Router();
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";
import { auth } from "../middlewares/authMiddleware.js";

router.get("/", getUsers); // pubic
router.post("/", auth, createUser); //private
router.put("/:id", auth, updateUser); // private
router.delete("/:id", auth, deleteUser); //private

export default router;
