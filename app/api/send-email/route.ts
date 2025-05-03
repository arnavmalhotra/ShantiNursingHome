import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create reusable transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      throw new Error('Email configuration is missing. Please set GMAIL_USER and GMAIL_APP_PASSWORD in your environment variables.');
    }

    const body = await request.json();
    const { name, age, phone, email, date, time, appointmentType, reason } = body;

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'rajvini68@gmail.com', // Send to yourself
      subject: `New Appointment Request from ${name}`,
      html: `
        <h2>New Appointment Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Appointment Type:</strong> ${appointmentType}</p>
        <p><strong>Reason:</strong> ${reason}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to send email' },
      { status: 500 }
    );
  }
} 