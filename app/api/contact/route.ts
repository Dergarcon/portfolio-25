import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL,
      subject: `Portfolio Contact: ${name}${company ? ` from ${company}` : ''}`,
      text: `
New contact form submission:

Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}

Message:
${message}

--
Sent from your portfolio contact form
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>Sent from your portfolio contact form</em></p>
      `,
    };

    // Send email to you
    await transporter.sendMail(mailOptions);

    // Send confirmation email to sender
    const confirmationMailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Confirmation: Your message to Nick Marek',
      text: `
Hi ${name},

Thank you for reaching out! This email confirms that I've received your message.

Here's a copy of what you sent:

Message:
${message}

I'll contact you shortly.

Best regards,
Nick Marek
Senior MEV Engineer

--
This is an automated confirmation email. Please do not reply to this address.
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Message Received!</h2>
          <p>Hi ${name},</p>
          <p>Thank you for reaching out! This email confirms that I've received your message.</p>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Your Message:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          <p>I'll contact you shortly.</p>
          
          <p>Best regards,<br>
          <strong>Nick Marek</strong><br>
          Senior MEV Engineer</p>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
          <p style="color: #666; font-size: 12px;">This is an automated confirmation email. Please do not reply to this address.</p>
        </div>
      `,
    };

    await transporter.sendMail(confirmationMailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
