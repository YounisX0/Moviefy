const express = require('express');
const bodyParser = require('body-parser');
const path=require('path');

const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Serve the signup form
app.get('signup', (req, res) => {
  res.sendFile(__dirname + '/signup.html'); // Ensure the path to your signup.html is correct
});

// Handle form submission
app.post('/submit', (req, res) => {
  const { fullName, email, username, gender, phone, password, conf_password } = req.body;

  // Basic validation (example)
  if (password !== conf_password) {
    return res.send('Passwords do not match!');
  }

  // Log the data to console (for demonstration)
  console.log(`Full Name: ${fullName}`);
  console.log(`Email: ${email}`);
  console.log(`Username: ${username}`);
  console.log(`Gender: ${gender}`);
  console.log(`Phone: ${phone}`);
  console.log(`Password: ${password}`);

  // Respond with a success message
  res.send('Form submission successful!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
