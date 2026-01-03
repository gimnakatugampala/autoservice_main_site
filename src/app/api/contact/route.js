// src/app/api/contact/route.js
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message, serviceType } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Using Brevo (formerly Sendinblue)
    // You'll need to install: npm install @getbrevo/brevo
    // And set BREVO_API_KEY in your .env.local
    
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': process.env.BREVO_API_KEY
      },
      body: JSON.stringify({
        sender: {
          name: 'AutoService.lk Contact Form',
          email: process.env.BREVO_SENDER_EMAIL || 'noreply@autoservice.lk'
        },
        to: [
          {
            email: process.env.CONTACT_EMAIL || 'info@autoservice.lk',
            name: 'AutoService.lk Team'
          }
        ],
        replyTo: {
          email: email,
          name: name
        },
        subject: `New Contact Form Submission - ${serviceType.charAt(0).toUpperCase() + serviceType.slice(1)}`,
        htmlContent: `
          <!DOCTYPE html>
          <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #156ac7, #2563eb); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px; }
              .info-row { margin: 15px 0; padding: 10px; background: white; border-radius: 4px; }
              .label { font-weight: bold; color: #156ac7; }
              .message-box { background: white; padding: 15px; border-left: 4px solid #156ac7; margin-top: 20px; }
              .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2 style="margin: 0;">New Contact Form Submission</h2>
                <p style="margin: 5px 0 0 0; opacity: 0.9;">Type: ${serviceType.charAt(0).toUpperCase() + serviceType.slice(1)}</p>
              </div>
              <div class="content">
                <div class="info-row">
                  <span class="label">Name:</span> ${name}
                </div>
                <div class="info-row">
                  <span class="label">Email:</span> <a href="mailto:${email}">${email}</a>
                </div>
                <div class="info-row">
                  <span class="label">Phone:</span> ${phone || 'Not provided'}
                </div>
                <div class="info-row">
                  <span class="label">Company:</span> ${company || 'Not provided'}
                </div>
                <div class="message-box">
                  <div class="label">Message:</div>
                  <p style="margin: 10px 0 0 0; white-space: pre-wrap;">${message}</p>
                </div>
              </div>
              <div class="footer">
                <p>This email was sent from the AutoService.lk contact form</p>
              </div>
            </div>
          </body>
          </html>
        `,
        textContent: `
New Contact Form Submission

Type: ${serviceType}
---
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Company: ${company || 'Not provided'}
---
Message:
${message}
        `
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Brevo API error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    const data = await response.json();
    console.log('Email sent successfully:', data.messageId);

    return NextResponse.json(
      { success: true, message: 'Email sent successfully', messageId: data.messageId },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}