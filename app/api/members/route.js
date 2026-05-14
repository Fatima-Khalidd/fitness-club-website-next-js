import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Member from '@/models/Members';

export async function GET() {
  try {
    await connectDB();
    const members = await Member.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, count: members.length, data: members });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const { name, email, phone, membershipType } = body;
    if (!name || !email) {
      return NextResponse.json({ success: false, error: 'Name and email are required' }, { status: 400 });
    }
    const member = await Member.create({ name, email, phone: phone || '', membershipType: membershipType || 'basic' });
    return NextResponse.json({ success: true, message: 'Member created successfully', data: member }, { status: 201 });
  } catch (error) {
    if (error.code === 11000) {
      return NextResponse.json({ success: false, error: 'A member with this email already exists' }, { status: 400 });
    }
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}