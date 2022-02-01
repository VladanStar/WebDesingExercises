import React from 'react';

const Student = ({firstName, lastName, jmbg}) => {
   
  return (
  <div>
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p> {jmbg}</p>
  </div>
  )};

export default Student;
