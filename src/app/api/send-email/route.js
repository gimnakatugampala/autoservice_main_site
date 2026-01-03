// src/app/api/send-email/route.js

import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message, serviceType } = body;

    // Validate required fields
    if (!name || !email || !message || !serviceType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Get Brevo API key from environment variable
    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    
    if (!BREVO_API_KEY) {
      console.error('BREVO_API_KEY is not set in environment variables');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Prepare email content
    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Company:</strong> ${company || 'Not provided'}</p>
      <p><strong>Service Type:</strong> ${serviceType}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `;

    // Send notification email to the support team
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY
      },
      body: JSON.stringify({
        sender: {
          name: 'AutoService App Contact',
          email: 'contactsupport@autoserviceapp.online' // Verified sender email
        },
        to: [
          {
            email: 'contactsupport@autoserviceapp.online', // Your receiving inbox
            name: 'AutoService Support Team'
          }
        ],
        replyTo: {
          email: email, // Enables replying directly to the person who filled the form
          name: name
        },
        subject: `New Contact Form: ${serviceType} - ${name}`,
        htmlContent: emailContent
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Brevo API Error:', errorData);
      return NextResponse.json(
        { error: 'Failed to send email', details: errorData },
        { status: response.status }
      );
    }

    const data = await response.json();
    
    // Send auto-reply to the customer
    await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY
      },
      body: JSON.stringify({
        sender: {
          name: 'AutoService App',
          email: 'contactsupport@autoserviceapp.online' // Verified sender email
        },
        to: [
          {
            email: email,
            name: name
          }
        ],
        subject: 'Thank you for contacting AutoService',
        htmlContent: `
          <h2>Thank you for reaching out!</h2>
          <p>Dear ${name},</p>
          <p>We've received your message and will get back to you within 24 hours.</p>
          <p><strong>Your message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <br>
          <p>Best regards,<br>AutoService Team</p>
        `
      })
    });

    return NextResponse.json({ 
      success: true, 
      messageId: data.messageId 
    });

  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Internal server error', message: error.message },
      { status: 500 }
    );
  }
}