import {
  createContext,
  useContext,
  useReducer
} from "react";

const AttendanceContext = createContext();

const initialState = [
  { id: 1, name: "Shreya", present: false },
  { id: 2, name: "Sneha", present: false },
  { id: 3, name: "Rahul", present: false }
];

function attendanceReducer(state, action) {
  switch (action.type) {
    case "MARK_PRESENT":
      return state.map((student) =>
        student.id === action.id
          ? { ...student, present: true }
          : student
      );

    case "MARK_ABSENT":
      return state.map((student) =>
        student.id === action.id
          ? { ...student, present: false }
          : student
      );

    default:
      return state;
  }
}

function AttendanceProvider({ children }) {
  const [students, dispatch] = useReducer(
    attendanceReducer,
    initialState
  );

  return (
    <AttendanceContext.Provider value={{ students, dispatch }}>
      {children}
    </AttendanceContext.Provider>
  );
}

function AttendanceList() {
  const { students, dispatch } = useContext(AttendanceContext);

  return (
    <div>
      <h3>Student Attendance</h3>

      {students.map((student) => (
        <div key={student.id}>
          <p>
            {student.name} -{" "}
            {student.present ? "Present" : "Absent"}
          </p>

          <button
            onClick={() =>
              dispatch({
                type: "MARK_PRESENT",
                id: student.id
              })
            }
          >
            Present
          </button>

          <button
            onClick={() =>
              dispatch({
                type: "MARK_ABSENT",
                id: student.id
              })
            }
          >
            Absent
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}

function Program9() {
  return (
    <AttendanceProvider>
      <div>
        <h2>Program 9 - Attendance Management</h2>
        <AttendanceList />
      </div>
    </AttendanceProvider>
  );
}

export default Program9;