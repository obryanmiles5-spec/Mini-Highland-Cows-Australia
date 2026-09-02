const fs = require('fs');

function fixForm(file) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(
    "Sorry, something went wrong. Please try again later.",
    "{errorMessage || 'Sorry, something went wrong. Please try again later.'}"
  );
  content = content.replace(
    "setErrorMessage(errorData?.message || '{errorMessage}');",
    "setErrorMessage(errorData?.message || 'Sorry, something went wrong. Please try again later.');"
  );
  fs.writeFileSync(file, content);
}

fixForm('src/components/ContactForm.tsx');
fixForm('src/components/ReserveForm.tsx');
