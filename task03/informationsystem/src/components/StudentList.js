import React from "react";
import Student from "./Student";
import './StudentList.css';

const StudentList = () => {
  const students = [
    {
      firstName: "Ranko",
      lastName: "Stajic",
      jmbg: 1103973721019,
    },
    {
        firstName: "Dragan",
        lastName: "Ikanovic",
        jmbg: 1103973721019,
      },
      {
        firstName: "Cedomir",
        lastName: "Tomcic",
        jmbg: 1103973721019,
      },
      {
        firstName: "Boris",
        lastName: "Jovkovic",
        jmbg: 1103973721019,
      },
      {
        firstName: "Luka",
        lastName: "Cveticanin",
        jmbg: 1103973721019,
      },
      {
        firstName: "Benjamin",
        lastName: "Sheshko",
        jmbg: 1103973721019,
      }


  ];
  return (
  <div className="StudentList">

      {students.map((student,id)=><Student key= {id} student={student}/>)}
  </div>)
};

export default StudentList;
