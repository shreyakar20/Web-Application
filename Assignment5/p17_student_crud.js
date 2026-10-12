const express = require('express');
const app = express();
const PORT = 5009;
// Middleware to read JSON request bodies
app.use(express.json());
// In-memory student records
let students = [
    { id: 1, name: 'Rahul', branch: 'CSE', semester: 5 },
    { id: 2, name: 'Priya', branch: 'ECE', semester: 3 }
];
// GET /students - Retrieve all students
app.get('/students', (req, res) => {
    res.status(200).json(students);
});
// GET /students/:id - Retrieve a student by ID
app.get('/students/:id', (req, res) => {
    const id = Number(req.params.id);
    const student = students.find(s => s.id === id);
    if (!student) {
        return res.status(404).json({
            message: 'Student not found'
        });
    }
    res.status(200).json(student);
});
// POST /students - Add a student
app.post('/students', (req, res) => {
    const { id, name, branch, semester } = req.body;
    if (id == null || !name || !branch ||
        semester == null ||
        !Number.isInteger(Number(id)) ||
        Number(id) <= 0 ||
        !Number.isInteger(Number(semester)) ||
        Number(semester) <= 0) {
        return res.status(400).json({
            message: 'Provide valid id, name, branch and semester'
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
        branch,
        semester: Number(semester)
    };
    students.push(newStudent);
    res.status(201).json({
        message: 'Student added successfully',
        student: newStudent
    });
});
// PUT /students/:id - Update a student
app.put('/students/:id', (req, res) => {
    const id = Number(req.params.id);
    const student = students.find(s => s.id === id);
    if (!student) {
        return res.status(404).json({
            message: 'Student not found'
        });
    }
    const { name, branch, semester } = req.body;
    if (!name || !branch || semester == null ||
        !Number.isInteger(Number(semester)) ||
        Number(semester) <= 0) {
        return res.status(400).json({
            message: 'Provide valid name, branch and semester'
        });
    }
    student.name = name;
    student.branch = branch;
    student.semester = Number(semester);
    res.status(200).json({
        message: 'Student updated successfully',
        student
    });
});
// DELETE /students/:id - Delete a student
app.delete('/students/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = students.findIndex(s => s.id === id);
    if (index === -1) {
        return res.status(404).json({
            message: 'Student not found'
        });
    }
    const deletedStudent = students.splice(index, 1)[0];
    res.status(200).json({
        message: 'Student deleted successfully',
        student: deletedStudent
    });
});
// Handle invalid routes
app.use((req, res) => {
    res.status(404).json({
        message: 'Route not found'
    });
});
// Start server
app.listen(PORT, () => {
    console.log(`Student API running at http://localhost:${PORT}`);
});
