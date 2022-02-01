import React from 'react';

const Student = ({student}) => {
  // const[jmbg, firstName, lastName] = props.student;
   
  return (
  <div>
      <p>{student.firstName}, {student.lastName},{student.jmbg}</p>
  </div>
  )};

export default Student;
