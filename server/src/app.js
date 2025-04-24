import express from 'express';
import cors from 'cors';
import notesRoutes from './routes/notesRoutes.js';

const app = express();

//Middlewares
app.use(cors());
app.use(express.json());

//Routes
app.use('/api', notesRoutes);

export default app;



