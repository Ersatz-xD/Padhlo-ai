import express from "express";
import { registerUser } from "../controllers/userController.js";

const router = express.Router();

// Route for registration
router.post("/register", registerUser);

export default router;
