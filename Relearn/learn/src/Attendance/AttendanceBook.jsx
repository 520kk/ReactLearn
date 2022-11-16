import React from "react";

const students = [
    {
        id: 1,
        name: "Stranger1",
    },
    {
        id: 2,
        name: "Stranger2",
    },
    {
        id: 3,
        name: "Stranger3",
    },
    {
        id: 4,
        name: "Stranger4",
    },
];

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student, index) => {
                return <li key={student.id}>{student.name}</li>;
            })}
        </ul>
    );
}

export default AttendanceBook;