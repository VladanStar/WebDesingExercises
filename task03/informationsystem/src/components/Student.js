import React from 'react';

const Student = (props) => {
  const[jmbg, firstName, lastName] = props.student;
   
  return (
  <div>
      <p>{firstName}, {lastName},{jmbg}</p>
  </div>
  )};

export default Student;
