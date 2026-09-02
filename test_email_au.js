const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com.au',
  port: 465,
  secure: true,
  auth: {
    user: 'info@minihighlandcows.store',
    pass: 'BEOK@1991!',
  },
});

transporter.verify(function (error, success) {
  if (error) {
    console.log("Verify Error AU:", error);
  } else {
    console.log("AU Server is ready to take our messages");
  }
});
