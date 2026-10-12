
function Student(props) {
    return (
        <div>
            <h3>Student Details</h3>
            <p>Name: {props.name}</p>
            <p>Branch: {props.branch}</p>
            <p>Semester: {props.semester}</p>
        </div>
    );
}

function Program11() {
    return (
        <div>
            <Student
                name="Shreya"
                branch="CSE"
                semester="5th"
            />

            <Student
                name="Rahul"
                branch="ECE"
                semester="3rd"
            />
        </div>
    );
}

export default Program11;
