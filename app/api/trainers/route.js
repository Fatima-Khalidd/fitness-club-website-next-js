import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Trainer from '@/models/Trainers';

export async function GET() {
  try {
    await connectDB();
    const trainers = await Trainer.find({ isActive: true }).sort({ name: 1 });
    return NextResponse.json({ success: true, count: trainers.length, data: trainers });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const { name, email, phone, specialization, bio } = body;
    if (!name) {
      return NextResponse.json({ success: false, error: 'Trainer name is required' }, { status: 400 });
    }
    const trainer = await Trainer.create({ name, email: email || '', phone: phone || '', specialization: specialization || [], bio: bio || '' });
    return NextResponse.json({ success: true, message: 'Trainer created successfully', data: trainer }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}