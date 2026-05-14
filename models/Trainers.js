import mongoose from 'mongoose';

const TrainerSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Name is required'], trim: true },
  email: { type: String, trim: true, lowercase: true },
  phone: { type: String, trim: true },
  specialization: { type: [String], default: [] },
  bio: { type: String, default: '' },
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

export default mongoose.models.Trainer ||
  mongoose.model('Trainer', TrainerSchema);