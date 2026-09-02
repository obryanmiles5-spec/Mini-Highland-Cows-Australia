import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    let subject = 'New Inquiry';
    if (data.type === 'reservation') {
      subject = `New Reservation Request from ${data.firstName} ${data.lastName}`;
    } else if (data.type === 'contact') {
      subject = `New Contact Inquiry from ${data.firstName} ${data.lastName}`;
    }

    const mailOptions = {
      from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_FROM_ADDRESS}>`,
      to: process.env.EMAIL_NOTIFICATION_RECIPIENT,
      replyTo: data.email,
      subject: subject,
      html: `
        <h3>${subject}</h3>
        <p><strong>Name:</strong> ${data.firstName || ''} ${data.lastName || ''}</p>
        <p><strong>Email:</strong> ${data.email || ''}</p>
        ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
        ${data.calfOfInterest ? `<p><strong>Calf of Interest:</strong> ${data.calfOfInterest}</p>` : ''}
        <p><strong>Message / Additional Details:</strong></p>
        <p>${data.message ? data.message.replace(/\n/g, '<br>') : ''}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email. Please check your SMTP credentials (you may need an App Password for Zoho):', error);
    return NextResponse.json({ success: false, message: 'Failed to send email' }, { status: 500 });
  }
}
