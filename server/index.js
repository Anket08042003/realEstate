import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js'


dotenv.config();

const mongoURI = process.env.MONGO_URL;
if (!mongoURI) {
  throw new Error('MongoDB URI is not defined. Please set it in the .env file.');
}

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected successfully.');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });

const app = express();

app.use("/api/user", userRouter)

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
