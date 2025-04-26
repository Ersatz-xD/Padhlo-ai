import express from "express";
import { registerUser, loginUser } from "../controllers/userController.js";

const router = express.Router();

// Route for registration
router.post("/signup", registerUser);
// Login route
router.post("/login", loginUser);

export default router;
