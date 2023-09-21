import React from 'react';
import './Navbar.css';
import {ImBook} from 'react-icons/im'
import { NavLink, Link, useNavigate } from 'react-router-dom';
const Navbar = () => {
 
 const navigate = useNavigate(); 
  return (
    <nav className="navbar">
      <div className="logo-container">
        <NavLink to="/" className="logo-link">
          <span > <ImBook/> Quick Learner</span>
        </NavLink>
      </div>
      <div className="topics-container">
        <ul className="topics-list">
          <li className="dropdown">
            <span className="topic">Topics</span>
            <ul className="dropdown-content">
            <li>
              <NavLink to="/cards/Operating%20System" className="jio">Operating system</NavLink>
            </li>
            <li>
              <NavLink to="/cards/DataBase%20Management%20System" className="jio">Database Management system</NavLink>
            </li>
            <li>
              <NavLink to="/cards/Data%20Structure%20and%20Algorithm" className="jio">Data Structure and Algorithm</NavLink>
            </li>
          </ul>
          </li>
        </ul>
      </div>
      <div className="auth-container">
        <NavLink to="/" className="Nav-right-link">Home</NavLink>
        <NavLink to="/signup" className="Nav-right-link">Signup</NavLink>
        <NavLink to="/signin" className="Nav-right-link">Login</NavLink>
        <NavLink to="/logout" className="Nav-right-link">Logout</NavLink>

      </div>
    </nav>
  );
};

export default Navbar;
