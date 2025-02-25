import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, default: 'Farmer' },
  location: { type: String, default: 'Unknown' },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String, required: true },
  longComment: { type: String },
  image: { type: String, required: true },
  farmType: { type: String, default: 'Mixed Crop Farming' },
  date: { type: String, default: () => new Date().toISOString().split('T')[0] }
});

export default mongoose.model('Review', reviewSchema);