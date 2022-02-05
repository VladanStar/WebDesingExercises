import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = (props) => {

    function logout() {
        fetch("/logout").then(() => {
          props.onLogout();
        });
      }
    
    
  return (
  <header className='Header'>
      <Link to='/students'>Students</Link>
      <Link to="/students/new"> Add Student</Link>
      <button onClick={logout}>Logout</button>

  </header>
  )
};

export default Header;
