import express from 'express';
import cors from 'cors';
import notesRoutes from './routes/notesRoutes.js';
import userRoutes from "./routes/userRoutes.js";

const app = express();

//Middlewares
app.use(cors());
app.use(express.json());

//Routes
app.use('/api', notesRoutes);
app.use("/api/users", userRoutes);


export default app;



