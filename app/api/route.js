import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

export async function GET() {
  return NextResponse.json({
    message: 'Hamza Fitness Club API',
    version: '2.0.0',
    platform: 'Next.js',
    status: 'Running',
    database: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected',
    endpoints: {
      members: '/api/members',
      trainers: '/api/trainers',
      appointments: '/api/appointments',
      classes: '/api/classes',
      health: '/api/health',
    },
  });
}