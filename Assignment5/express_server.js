const express = require('express');

const app = express();

const PORT = 5000;

app.get('/', (req, res) => {
    res.send('Welcome to ExpressJS');
});

app.get('/about', (req, res) => {
    res.send('NodeJS Laboratory');
});

app.use((req, res) => {
    res.status(404).send('404 - Page Not Found');
});

app.listen(PORT, () => {
    console.log(`ExpressJS server running at http://localhost:${PORT}`);
});