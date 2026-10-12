import { useState } from 'react';
function EmployeeCard({ employee, onEdit }) {
    return (
        <div style={{
            border: '1px solid gray',
            padding: '12px',
            margin: '10px 0'
        }}>
            <p><b>ID:</b> {employee.id}</p>
            <p><b>Name:</b> {employee.name}</p>
            <p><b>Department:</b> {employee.department}</p>
            <p><b>Salary:</b> Rs. {employee.salary}</p>

            <button onClick={() => onEdit(employee)}>
                Edit Employee
            </button>
        </div>
    );
}
function Program15() {
    const [employees, setEmployees] = useState([
        {
            id: 1,
            name: 'Rahul',
            department: 'IT',
            salary: 30000
        },
        {
            id: 2,
            name: 'Priya',
            department: 'HR',
            salary: 35000
        }
    ]);
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [department, setDepartment] = useState('');
    const [salary, setSalary] = useState('');
    const [editing, setEditing] = useState(false);
    const [message, setMessage] = useState('');
    function saveEmployee(e) {
        e.preventDefault();
        if (!id.trim() || !name.trim() ||
            !department.trim() || salary.trim() === '' ||
            !Number.isFinite(Number(salary)) ||
            Number(salary) < 0) {
            setMessage('Please enter valid employee details.');
            return;
        }
        const employee = {
            id: Number(id),
            name: name.trim(),
            department: department.trim(),
            salary: Number(salary)
        };
        if (editing) {
            setEmployees(employees.map(emp =>
                emp.id === employee.id ? employee : emp
            ));
            setMessage('Employee updated successfully!');
        } else {
            if (employees.some(emp => emp.id === employee.id)) {
                setMessage('Employee ID already exists!');
                return;
            }
            setEmployees([...employees, employee]);
            setMessage('Employee added successfully!');
        }
        clearForm();
    }
    function editEmployee(employee) {
        setId(String(employee.id));
        setName(employee.name);
        setDepartment(employee.department);
        setSalary(String(employee.salary));
        setEditing(true);
        setMessage('');
    }

    function clearForm() {
        setId('');
        setName('');
        setDepartment('');
        setSalary('');
        setEditing(false);
    }

    return (
        <div>
            <h2>Employee Management</h2>

            <form onSubmit={saveEmployee}>
                <input
                    placeholder="Employee ID"
                    type="number"
                    min="1"
                    value={id}
                    disabled={editing}
                    onChange={e => setId(e.target.value)}
                    required
                />
                <br /><br />

                <input
                    placeholder="Employee Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
                <br /><br />

                <input
                    placeholder="Department"
                    value={department}
                    onChange={e => setDepartment(e.target.value)}
                    required
                />
                <br /><br />

                <input
                    placeholder="Salary"
                    type="number"
                    min="0"
                    value={salary}
                    onChange={e => setSalary(e.target.value)}
                    required
                />
                <br /><br />

                <button type="submit">
                    {editing ? 'Update Employee' : 'Add Employee'}
                </button>

                {' '}

                <button type="button" onClick={clearForm}>
                    Clear
                </button>
            </form>

            <p>{message}</p>

            <h3>Employee List</h3>

            {employees.map(employee => (
                <EmployeeCard
                    key={employee.id}
                    employee={employee}
                    onEdit={editEmployee}
                />
            ))}
        </div>
    );
}

export default Program15;
