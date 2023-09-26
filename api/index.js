import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fileRouter } from './routes/file.route.js';

const app = express();

// middleware
dotenv.config();
app.use(express.json());

app.use('/api/file', fileRouter);


mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('MongoDB connected...')
}).catch(err => console.log(err));

app.listen(3001, () => {
  console.log('Server listening on port 3001');
});