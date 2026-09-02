const fs = require('fs');

function fixQuotes(file) {
  let content = fs.readFileSync(file, 'utf8');
  
  // Fix the catch block
  content = content.replace(
    /setErrorMessage\(error\.message \|\| '\{errorMessage \|\| 'Sorry, something went wrong\. Please try again later\.'\}'\);/g,
    "setErrorMessage(error.message || 'Sorry, something went wrong. Please try again later.');"
  );
  
  content = content.replace(
    /setErrorMessage\(errorData\?\.message \|\| '\{errorMessage \|\| 'Sorry, something went wrong\. Please try again later\.'\}'\);/g,
    "setErrorMessage(errorData?.message || 'Sorry, something went wrong. Please try again later.');"
  );

  // Fix the render block
  content = content.replace(
    /\{errorMessage \|\| 'Sorry, something went wrong\. Please try again later\.'\}/g,
    "{errorMessage || 'Sorry, something went wrong. Please try again later.'}"
  );

  fs.writeFileSync(file, content);
}

fixQuotes('src/components/ContactForm.tsx');
fixQuotes('src/components/ReserveForm.tsx');
