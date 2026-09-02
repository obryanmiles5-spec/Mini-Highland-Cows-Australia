const fs = require('fs');
let content = fs.readFileSync('src/app/api/contact/route.ts', 'utf8');

// Replace the transporter config to be more robust against env var trailing spaces
const oldTransporter = `    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });`;

const newTransporter = `    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST?.trim() || 'smtp.zoho.com',
      port: Number(process.env.SMTP_PORT?.trim()) || 465,
      secure: process.env.SMTP_SECURE?.trim() === 'true' || true,
      auth: {
        user: process.env.SMTP_USER?.trim(),
        pass: process.env.SMTP_PASSWORD?.trim(),
      },
    });`;

content = content.replace(oldTransporter, newTransporter);

// Also trim from/to
const oldMailOptions = `    const mailOptions = {
      from: \`"\${process.env.EMAIL_FROM_NAME}" <\${process.env.EMAIL_FROM_ADDRESS}>\`,
      to: process.env.EMAIL_NOTIFICATION_RECIPIENT,`;

const newMailOptions = `    const mailOptions = {
      from: \`"\${process.env.EMAIL_FROM_NAME?.trim()}" <\${process.env.EMAIL_FROM_ADDRESS?.trim()}>\`,
      to: process.env.EMAIL_NOTIFICATION_RECIPIENT?.trim(),`;

content = content.replace(oldMailOptions, newMailOptions);

fs.writeFileSync('src/app/api/contact/route.ts', content);
