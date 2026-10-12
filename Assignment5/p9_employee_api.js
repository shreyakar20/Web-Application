const express = require('express');
const app = express();
const PORT = 5006;
// Middleware to read JSON request bodies
app.use(express.json());
// Custom middleware to log every request
app.use((req, res, next) => {
    console.log('Method:', req.method);
    console.log('URL:', req.url);
    console.log('Date and Time:', new Date().toLocaleString());
    console.log('-------------------------');
    next();
});
// In-memory employee data
let employees = [
    { id: 1, name: 'Rahul', department: 'IT', salary: 30000 },
    { id: 2, name: 'Priya', department: 'HR', salary: 35000 },
    { id: 3, name: 'Amit', department: 'Finance', salary: 40000 }
];
// GET /employees - Return all employees
app.get('/employees', (req, res) => {
    res.status(200).json(employees);
});
// GET /employees/:id - Return employee by ID
app.get('/employees/:id', (req, res) => {
    const id = Number(req.params.id);
    const employee = employees.find(emp => emp.id === id);
    if (employee) {
        res.status(200).json(employee);
    } else {
        res.status(404).json({
            message: 'Employee not found'
        });
    }
});
// POST /employees - Add a new employee
app.post('/employees', (req, res) => {
    const { id, name, department, salary } = req.body;
    if (id == null || !name || !department || salary == null) {
        return res.status(400).json({
            message: 'Please provide id, name, department, and salary'
        });
    }
    if (employees.some(emp => emp.id === Number(id))) {
        return res.status(409).json({
            message: 'Employee ID already exists'
        });
    }
    const newEmployee = {
        id: Number(id),
        name,
        department,
        salary: Number(salary)
    };
    employees.push(newEmployee);
    res.status(201).json({
        message: 'Employee added successfully',
        employee: newEmployee
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
    console.log(`Server running at http://localhost:${PORT}`);
});
