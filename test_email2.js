const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.zoho.com',
  port: Number(process.env.SMTP_PORT) || 465,
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER || 'info@minihighlandcows.store',
    pass: process.env.SMTP_PASSWORD || 'BEOK@1991!',
  },
});

transporter.verify(function (error, success) {
  if (error) {
    console.log("Verify Error:", error);
  } else {
    console.log("Server is ready to take our messages");
  }
});
