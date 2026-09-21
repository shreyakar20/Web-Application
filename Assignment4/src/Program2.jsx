function Student({ name, rollNo, course }) {
  return (
    <div>
      <h2>Program 2 - Student Information</h2>
      <p>Student Name: {name}</p>
      <p>Roll Number: {rollNo}</p>
      <p>Course: {course}</p>
    </div>
  );
}

function Program2() {
  return (
    <Student
      name="Shreya"
      rollNo="23"
      course="Computer Science and Engineering"
    />
  );
}

export default Program2;