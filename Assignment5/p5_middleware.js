
const express = require('express');

const app = express();
const PORT = 5002;

// Custom middleware
function logger(req, res, next) {
    console.log('Request Method:', req.method);
    console.log('Request URL:', req.url);
    console.log('Date and Time:', new Date().toLocaleString());
    console.log('-------------------------');

    next();
}

// Apply middleware to all routes
app.use(logger);

// Route 1
app.get('/', (req, res) => {
    res.send('Welcome to ExpressJS Middleware');
});

// Route 2
app.get('/about', (req, res) => {
    res.send('This is the About Page');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
