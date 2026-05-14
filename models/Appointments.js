import mongoose from 'mongoose';

const AppointmentSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Name is required'], trim: true },
  phone: { type: String, required: [true, 'Phone is required'], trim: true },
  email: { type: String, required: [true, 'Email is required'], trim: true, lowercase: true },
  date: { type: String, required: [true, 'Date is required'] },
  time: { type: String, required: [true, 'Time is required'] },
  concerns: { type: [String], default: [] },
  notes: { type: String, default: '' },
  status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' },
}, { timestamps: true });

export default mongoose.models.Appointment ||
  mongoose.model('Appointment', AppointmentSchema);