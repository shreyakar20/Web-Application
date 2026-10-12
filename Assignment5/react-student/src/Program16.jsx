import {
    createContext,
    useContext,
    useState
} from 'react';
const CourseContext = createContext();
const availableCourses = [
    'Web Development',
    'Data Structures',
    'Machine Learning',
    'Database Management',
    'Computer Networks'
];
// Component to select courses
function CourseSelection() {
    const { selectedCourses, setSelectedCourses } =
        useContext(CourseContext);
    function toggleCourse(course) {
        if (selectedCourses.includes(course)) {
            setSelectedCourses(
                selectedCourses.filter(c => c !== course)
            );
        } else {
            setSelectedCourses([...selectedCourses, course]);
        }
    }
    return (
        <div>
            <h3>Available Courses</h3>
            {availableCourses.map(course => (
                <div key={course}>
                    <label>
                        <input
                            type="checkbox"
                            checked={selectedCourses.includes(course)}
                            onChange={() => toggleCourse(course)}
                        />
                        {course}
                    </label>
                </div>
            ))}
        </div>
    );
}
// Component to display selected courses
function SelectedCourses() {
    const { selectedCourses } = useContext(CourseContext);
    return (
        <div>
            <h3>Selected Courses</h3>
            {selectedCourses.length === 0 ? (
                <p>No courses selected.</p>
            ) : (
                <ul>
                    {selectedCourses.map(course => (
                        <li key={course}>{course}</li>
                    ))}
                </ul>
            )}
            <p>Total Selected: {selectedCourses.length}</p>
        </div>
    );
}
// Main program
function Program16() {
    const [selectedCourses, setSelectedCourses] = useState([]);
    return (
        <CourseContext.Provider
            value={{ selectedCourses, setSelectedCourses }}
        >
            <div>
                <h2>Course Registration System</h2>
                <CourseSelection />
                <hr />
                <SelectedCourses />
            </div>
        </CourseContext.Provider>
    );
}
export default Program16;
