import React, { useEffect, useState } from "react";
import Student from "./Student";
import "./StudentList.css";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("./students.json", {
      headers: {
        method: "GET",
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((data) => data.json())
     // .then((data) => console.log(data))
      .then(students => setStudents(students));
  }, []);

  return (
    <div className="StudentList">
      {
      students &&
        students.map((student,id) => <Student key={id} student={student} />
)
        }
    </div>
  );
};

export default StudentList;
