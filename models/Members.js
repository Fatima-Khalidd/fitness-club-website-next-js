import mongoose from 'mongoose';

const MemberSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Name is required'], trim: true },
  email: { type: String, required: [true, 'Email is required'], trim: true, lowercase: true, unique: true },
  phone: { type: String, trim: true },
  membershipType: { type: String, enum: ['basic', 'standard', 'premium'], default: 'basic' },
  joinDate: { type: Date, default: Date.now },
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

export default mongoose.models.Member ||
  mongoose.model('Member', MemberSchema);