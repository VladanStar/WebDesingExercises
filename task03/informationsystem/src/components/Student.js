import React from 'react';

const Student = ({student}) => {
   
  return (
  <div>
      <p>{student.firstName}</p>
      <p>{student.lastName}</p>
      <p> {student.jmbg}</p>
  </div>
  )};

export default Student;
