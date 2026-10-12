
import { useState } from 'react';

import Program11 from './Program11';
import Program12 from './Program12';
import Program13 from './Program13';
import Program15 from './Program15';
import Program16 from './Program16';

const programs = [
    { id: 11, name: 'Student Component', Component: Program11 },
    { id: 12, name: 'Counter using useState', Component: Program12 },
    { id: 13, name: 'Product List with Hooks', Component: Program13 },
    { id: 15, name: 'Employee Management', Component: Program15 },
    { id: 16, name: 'Course Registration', Component: Program16 }
];

function App() {
    const [selectedProgram, setSelectedProgram] = useState(11);

    const ActiveProgram = programs.find(
        program => program.id === selectedProgram
    )?.Component;

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial' }}>
            <h1>Web Applications - Assignment 5</h1>
            <h3>ReactJS Programs</h3>

            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
                marginBottom: '25px'
            }}>
                {programs.map(program => (
                    <button
                        key={program.id}
                        onClick={() => setSelectedProgram(program.id)}
                        style={{
                            padding: '10px 14px',
                            cursor: 'pointer',
                            backgroundColor:
                                selectedProgram === program.id
                                    ? '#2563eb'
                                    : '#e5e7eb',
                            color:
                                selectedProgram === program.id
                                    ? 'white'
                                    : 'black',
                            border: 'none',
                            borderRadius: '6px'
                        }}
                    >
                        Program {program.id}
                    </button>
                ))}
            </div>

            <hr />

            <h2>
                {programs.find(p => p.id === selectedProgram)?.name}
            </h2>

            <ActiveProgram />
        </div>
    );
}
export default App;
