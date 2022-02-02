import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
  return (
  <header className='Header'>
      <Link to='/students'>Students</Link>
      <Link to="/students/new"> Add Student</Link>

  </header>
  )
};

export default Header;
