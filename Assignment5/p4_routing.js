const express = require('express');
const app = express();
const PORT = 5001;
const students = [
    { id: 1, name: 'Rahul', course: 'CSE' },
    { id: 2, name: 'Priya', course: 'CSE' },
    { id: 3, name: 'Amit', course: 'ECE' }
];
app.get('/students', (req, res) => {
    res.json(students);
});
// GET /students/:id - Display student details by ID
app.get('/students/:id', (req, res) => {
    const id = Number(req.params.id);
    const student = students.find(s => s.id === id);

    if (student) {
        res.json(student);
    } else {
        res.status(404).send('Student Not Found');
    }
});

// GET /faculty - Display faculty information
app.get('/faculty', (req, res) => {
    res.send('Faculty: Dr. Sharma, Department: CSE');
});

// Invalid route
app.use((req, res) => {
    res.status(404).send('404 - Route Not Found');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
