import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Review from './models/Review.js';

dotenv.config();
console.log("MongoDB URI:", process.env.MONGODB_URI); 

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: '50mb' }));

// MongoDB connection with retry logic
const connectWithRetry = async () => {
  const MONGODB_URI = process.env.MONGODB_URI;
  
  if (!MONGODB_URI) {
    console.error('MONGODB_URI is not defined in environment variables');
    process.exit(1);
  }

  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Successfully connected to MongoDB Atlas');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    console.log('Retrying connection in 5 seconds...');
    setTimeout(connectWithRetry, 5000);
  }
};

connectWithRetry();

// Get all reviews
app.get('/api/reviews', async (req, res) => {
  try {
    const reviews = await Review.find().sort({ date: -1 });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching reviews', error });
  }
});

// Add a new review
// app.post('/api/reviews', async (req, res) => {
//   try {
//     const review = new Review(req.body);
//     const savedReview = await review.save();
//     res.status(201).json(savedReview);
//   } catch (error) {
//     res.status(500).json({ message: 'Error creating review', error });
//   }
// });


app.post('/api/reviews', async (req, res) => {
  try {
    console.log('Incoming review data:', req.body); // Debugging
    const review = new Review(req.body);
    const savedReview = await review.save();
    res.status(201).json(savedReview);
  } catch (error) {
    console.error('Error creating review:', error);
    res.status(500).json({ message: 'Error creating review', error });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Handle process termination
process.on('SIGINT', async () => {
  try {
    await mongoose.connection.close();
    console.log('MongoDB connection closed through app termination');
    process.exit(0);
  } catch (err) {
    console.error('Error during MongoDB connection closure:', err);
    process.exit(1);
  }
});