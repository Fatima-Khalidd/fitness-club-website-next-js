import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Class from '@/models/Class';

export async function GET() {
  try {
    await connectDB();
    const classes = await Class.find({ isActive: true }).populate('trainer', 'name specialization').sort({ name: 1 });
    return NextResponse.json({ success: true, count: classes.length, data: classes });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const { name, description, trainer, schedule, capacity } = body;
    if (!name) {
      return NextResponse.json({ success: false, error: 'Class name is required' }, { status: 400 });
    }
    const gymClass = await Class.create({ name, description: description || '', trainer: trainer || undefined, schedule: schedule || '', capacity: capacity || 20 });
    return NextResponse.json({ success: true, message: 'Class created successfully', data: gymClass }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}