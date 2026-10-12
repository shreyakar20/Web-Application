
const express = require('express');

const app = express();
const PORT = 5003;

// Authentication middleware
function authenticate(req, res, next) {
    if (req.query.role === 'admin') {
        next();
    } else {
        res.status(403).send('Access Denied');
    }
}

// Home route (no authentication required)
app.get('/home', (req, res) => {
    res.send('Welcome to Home Page');
});

// Dashboard route (authentication required)
app.get('/dashboard', authenticate, (req, res) => {
    res.send('Welcome to Admin Dashboard');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
