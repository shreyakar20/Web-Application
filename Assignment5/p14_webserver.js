
const express = require('express');

const app = express();
const PORT = 5008;

// Home route
app.get('/', (req, res) => {
    res.send('<h1>Welcome to Home Page</h1>');
});

// About route
app.get('/about', (req, res) => {
    res.send('<h1>About Us</h1><p>This is our website.</p>');
});

// Contact route
app.get('/contact', (req, res) => {
    res.send('<h1>Contact Us</h1><p>Email: contact@example.com</p>');
});

// Invalid route
app.use((req, res) => {
    res.status(404).send('404 - Page Not Found');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
