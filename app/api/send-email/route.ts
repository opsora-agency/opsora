import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  console.log('🚀 Starting Opsora to Opsora email...');
  
  try {
    // Get credentials from environment variables
    const EMAIL_USER = process.env.EMAIL_USER || 'opsoraagency@gmail.com';
    const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD; // Use App Password here
    
    console.log('📧 Using email:', EMAIL_USER);
    console.log('🔑 Password configured:', !!EMAIL_PASSWORD ? 'Yes' : 'No');

    // Parse the request
    const body = await request.json();
    const { 
      to = 'opsoraagency@gmail.com', 
      subject = 'New Contact Form Submission',
      html 
    } = body;

    console.log('📝 Sending to:', to);
    console.log('📋 Subject:', subject);

    if (!html) {
      return NextResponse.json({ 
        success: false,
        error: 'Please provide message content'
      }, { status: 400 });
    }

    // Create transporter - Simple Gmail configuration
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false // For local development
      }
    });

    // Verify connection
    console.log('🔌 Verifying Gmail connection...');
    await transporter.verify();
    console.log('✅ Gmail connection verified');

    // Prepare email
    const mailOptions = {
      from: `"Opsora Agency Website" <${EMAIL_USER}>`,
      to: to,
      subject: subject,
      html: html,
      text: html.replace(/<[^>]*>/g, ''), // Plain text version
      replyTo: EMAIL_USER,
    };

    console.log('📤 Sending email...');
    const info = await transporter.sendMail(mailOptions);
    
    console.log('✅ Email sent successfully!');
    console.log('Message ID:', info.messageId);
    console.log('Response:', info.response);

    return NextResponse.json({
      success: true,
      message: 'Your message has been sent successfully! We will contact you within 24 hours.',
      messageId: info.messageId,
    });

  } catch (error: any) {
    console.error('❌ Email sending failed:');
    console.error('Error:', error);
    console.error('Error code:', error.code);
    console.error('Error message:', error.message);
    
    // User-friendly error messages
    let userMessage = 'Something went wrong. Please try again or contact us directly at opsoraagency@gmail.com';
    
    if (error.code === 'EAUTH') {
      userMessage = 'Email authentication failed. Please use an App Password (not your regular password) and ensure 2FA is enabled.';
    } else if (error.code === 'EENVELOPE') {
      userMessage = 'Invalid email address.';
    } else if (error.message?.includes('Invalid login')) {
      userMessage = 'Invalid email credentials. Please check your App Password.';
    } else if (error.message?.includes('recipient')) {
      userMessage = 'Invalid recipient email address.';
    }

    return NextResponse.json({
      success: false,
      error: userMessage,
      // Show debug info in development
      debug: process.env.NODE_ENV === 'development' ? {
        code: error.code,
        message: error.message
      } : undefined
    }, { status: 500 });
  }
}