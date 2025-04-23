import express from 'express';
import { generateSummary } from '../controllers/notesController.js';

const router = express.Router();

router.post('/generate-summary', generateSummary);

export default router;
