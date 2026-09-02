const fs = require('fs');

function updateForm(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Change setError(false) to setErrorMessage('')
  content = content.replace("const [error, setError] = useState(false);", "const [error, setError] = useState(false);\n  const [errorMessage, setErrorMessage] = useState('');");
  
  content = content.replace(/setError\(false\);/g, "setError(false);\n    setErrorMessage('');");

  // Inside the try block
  content = content.replace(
    /if \(response\.ok\) \{[\s\S]*?\} else \{[\s\S]*?setError\(true\);[\s\S]*?\}/,
    `if (response.ok) {
        setSuccess(true);
        (e.target as HTMLFormElement).reset();
      } else {
        const errorData = await response.json().catch(() => null);
        setError(true);
        setErrorMessage(errorData?.message || 'Sorry, something went wrong. Please try again later.');
      }`
  );

  content = content.replace(
    /\} catch \(error\) \{[\s\S]*?setError\(true\);[\s\S]*?\}/,
    `} catch (error: any) {
      setError(true);
      setErrorMessage(error.message || 'Sorry, something went wrong. Please try again later.');
    }`
  );

  content = content.replace(
    /Sorry, something went wrong\. Please try again later\./,
    "{errorMessage}"
  );

  fs.writeFileSync(filePath, content);
}

updateForm('src/components/ContactForm.tsx');
updateForm('src/components/ReserveForm.tsx');
