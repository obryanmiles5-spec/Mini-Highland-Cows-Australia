import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Log inquiry to server console so inquiries are never lost
    console.log('[Contact API] Incoming inquiry submission:', {
      type: data.type,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      calfOfInterest: data.calfOfInterest,
      submittedAt: new Date().toISOString(),
    });

    const smtpHost = process.env.SMTP_HOST?.trim() || 'smtp.zoho.com';
    const smtpPort = Number(process.env.SMTP_PORT?.trim()) || 465;
    const smtpSecure = process.env.SMTP_SECURE?.trim()
      ? process.env.SMTP_SECURE.trim() === 'true'
      : smtpPort === 465;
    const smtpUser = process.env.SMTP_USER?.trim();
    const smtpPass = process.env.SMTP_PASSWORD?.trim();

    if (!smtpUser || !smtpPass) {
      console.error('[Contact API] Missing SMTP credentials. SMTP_USER and SMTP_PASSWORD must be configured.');
      return NextResponse.json(
        {
          success: false,
          message: 'Email service configuration incomplete: SMTP_USER and SMTP_PASSWORD must be provided in settings.',
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000,
    });

    let subject = 'New Inquiry';
    if (data.type === 'reservation') {
      subject = `New Reservation Request from ${data.firstName || ''} ${data.lastName || ''}`;
    } else if (data.type === 'contact') {
      subject = `New Contact Inquiry from ${data.firstName || ''} ${data.lastName || ''}`;
    }

    const fromName = process.env.EMAIL_FROM_NAME?.trim() || 'Dunblane Mini Highland Cows';
    const fromAddress = process.env.EMAIL_FROM_ADDRESS?.trim() || smtpUser;
    const recipient = process.env.EMAIL_NOTIFICATION_RECIPIENT?.trim() || smtpUser;

    const mailOptions = {
      from: `"${fromName}" <${fromAddress}>`,
      to: recipient,
      replyTo: data.email || smtpUser,
      subject: subject,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1e293b;">
          <h2 style="color: #1C3B2B; border-bottom: 2px solid #C2673F; padding-bottom: 8px;">${subject}</h2>
          <p><strong>Type:</strong> ${data.type || 'General'}</p>
          <p><strong>Name:</strong> ${data.firstName || ''} ${data.lastName || ''}</p>
          <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email || 'N/A'}</a></p>
          ${data.phone ? `<p><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>` : ''}
          ${data.calfOfInterest ? `<p><strong>Calf of Interest:</strong> ${data.calfOfInterest}</p>` : ''}
          <div style="margin-top: 16px; padding: 12px; background: #f8fafc; border-left: 4px solid #1C3B2B;">
            <p style="margin: 0 0 6px 0;"><strong>Message / Details:</strong></p>
            <p style="margin: 0; white-space: pre-wrap;">${data.message ? data.message.replace(/\n/g, '<br>') : 'No message provided.'}</p>
          </div>
          <p style="margin-top: 24px; font-size: 12px; color: #64748b;">
            Submitted via Dunblane Highlands website on ${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Brisbane' })} AEST
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });
  } catch (error: any) {
    console.error('[Contact API] SMTP Error:', error);
    let errorMessage = error.message || error.toString();

    if (errorMessage.includes('535 Authentication Failed') || error.code === 'EAUTH') {
      errorMessage =
        'Authentication Failed (535): Zoho Mail requires an "App Password" rather than your normal Zoho account password. Please sign in to Zoho Accounts (accounts.zoho.com) -> Security -> App Passwords, generate an App Password, and update SMTP_PASSWORD with it. Also ensure SMTP Access is enabled in Zoho Mail Settings.';
    } else if (errorMessage.includes('553 Relaying disallowed') || errorMessage.includes('relaying')) {
      errorMessage =
        'Relaying Disallowed (553): In Zoho Mail, your EMAIL_FROM_ADDRESS must exactly match your authenticated SMTP_USER email address (info@minihighlandcows.store).';
    } else if (error.code === 'ETIMEDOUT' || error.code === 'ESOCKETTIMEDOUT') {
      errorMessage =
        'Connection Timed Out: Unable to connect to SMTP host. Verify your SMTP_HOST and SMTP_PORT (e.g. smtp.zoho.com with port 465 or port 587).';
    }

    return NextResponse.json({ success: false, message: errorMessage }, { status: 500 });
  }
}
