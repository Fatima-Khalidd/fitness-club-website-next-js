import mongoose from 'mongoose';

const ClassSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Class name is required'], trim: true },
  description: { type: String, default: '' },
  trainer: { type: mongoose.Schema.Types.ObjectId, ref: 'Trainer' },
  schedule: { type: String, default: '' },
  capacity: { type: Number, default: 20 },
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

export default mongoose.models.Class ||
  mongoose.model('Class', ClassSchema);