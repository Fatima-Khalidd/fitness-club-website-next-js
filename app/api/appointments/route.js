import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Appointment from '@/models/Appointments';

export async function GET() {
  try {
    await connectDB();
    const appointments = await Appointment.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, count: appointments.length, data: appointments });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const { name, phone, email, date, time, concerns, notes } = body;
    if (!name || !phone || !email || !date || !time) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields: name, phone, email, date, time' },
        { status: 400 }
      );
    }
    const appointment = await Appointment.create({ name, phone, email, date, time, concerns: concerns || [], notes: notes || '' });
    return NextResponse.json(
      { success: true, message: 'Appointment booked successfully!', data: appointment },
      { status: 201 }
    );
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((e) => e.message);
      return NextResponse.json({ success: false, error: messages.join(', ') }, { status: 400 });
    }
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}