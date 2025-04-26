import express from 'express';
import { generateSummary, getAllNotes } from '../controllers/notesController.js';
import auth from '../middlewares/auth.js';
const router = express.Router();

router.post("/generate-summary", generateSummary);  
router.get("/get-all-notes", auth, getAllNotes);   


export default router;
