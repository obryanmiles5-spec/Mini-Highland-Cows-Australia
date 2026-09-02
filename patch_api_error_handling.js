const fs = require('fs');
let content = fs.readFileSync('src/app/api/contact/route.ts', 'utf8');

const oldCatch = `  } catch (error: any) {
    console.error('Error sending email. Please check your SMTP credentials (you may need an App Password for Zoho):', error);
    return NextResponse.json({ success: false, message: 'Failed to send email: ' + (error.message || error.toString()) }, { status: 500 });
  }`;

const newCatch = `  } catch (error: any) {
    console.error('SMTP Error:', error);
    let errorMessage = error.message || error.toString();
    
    if (errorMessage.includes('535 Authentication Failed')) {
      errorMessage = 'Authentication Failed: Please ensure you are using an App Password (not your main account password) if 2FA is enabled. For Zoho, go to Security -> App Passwords to generate one.';
    } else if (errorMessage.includes('553 Relaying disallowed')) {
      errorMessage = 'Relaying Disallowed: Your EMAIL_FROM_ADDRESS must exactly match your SMTP_USER email address.';
    }
    
    return NextResponse.json({ success: false, message: errorMessage }, { status: 500 });
  }`;

if (content.includes('catch (error)')) {
  // Wait, I might not have `error: any` in my previous patch
  content = content.replace(/\} catch \(error\) \{[\s\S]*?return NextResponse\.json[\s\S]*?\}/, newCatch.replace('error: any', 'error'));
} else {
  // Need to find exactly what is there
  console.log("Could not find catch block");
}

fs.writeFileSync('src/app/api/contact/route.ts', content);
