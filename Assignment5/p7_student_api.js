const express = require('express');
const app = express();
const PORT = 5004;
app.use(express.json());
let students = [
    { id: 1, name: 'Rahul', course: 'CSE' },
    { id: 2, name: 'Priya', course: 'CSE' },
    { id: 3, name: 'Amit', course: 'ECE' }
];
app.get('/students', (req, res) => {
    res.json(students);
});
app.get('/students/:id', (req, res) => {
    const id = Number(req.params.id);
    const student = students.find(s => s.id === id);

    if (student) {
        res.json(student);
    } else {
        res.status(404).json({ message: 'Student not found' });
    }
});
app.post('/students', (req, res) => {
    const { id, name, course } = req.body;

    if (id == null || !name || !course) {
        return res.status(400).json({
            message: 'Please provide id, name, and course'
        });
    }

    if (students.some(s => s.id === Number(id))) {
        return res.status(409).json({
            message: 'Student ID already exists'
        });
    }

    const newStudent = {
        id: Number(id),
        name,
        course
    };

    students.push(newStudent);

    res.status(201).json({
        message: 'Student added successfully',
        student: newStudent
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
