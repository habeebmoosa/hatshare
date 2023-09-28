import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import { fileRouter } from './routes/file.route.js';

const app = express();

// middleware
dotenv.config();
app.use(express.json());
app.use(cors());

app.use('/api/file', fileRouter);


mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('MongoDB connected...')
}).catch(err => console.log(err));

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});