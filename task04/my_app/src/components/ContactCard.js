import React from 'react';
import user from "../images/user.png";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css" ;

 const ContactCard = (props) => {

  const {id, name, email} = props.contact;
  return (
    <div className="item">

      <img src={user} alt="user" className="ui avatar image" />
    <div className="content">
      <Link to={{pathname:`/contact/${id}`, state:{contact:props.contact}}}>
      
      <div className="header"> {name}</div> <br></br>
      <div>{email}</div>
      </Link>
    </div>
    <i className='trash alternate outline icon'
      style={{color:"red", marginTop:"7px"}}
      onClick={()=> props.clickHandler(id)}
    ></i>
    
  </div>
  )
};
export default ContactCard;
