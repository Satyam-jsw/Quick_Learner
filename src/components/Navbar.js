import React, { useEffect, useState } from 'react';
import './Navbar.css';

import Cards from './Cards';
// import from ''
import { NavLink, Link, Navigate, useNavigate } from 'react-router-dom';
const Navbar = () => {
 
 const navigate = useNavigate(); 
  return (
    <nav className="navbar">
      <div className="logo-container">
        <NavLink to="/" className="logo-link">
          {/* <img src="xxxx" alt="Quick Learner Logo" className="logo" /> */}
          <span className="FaBookBookmark">Quick Learner</span>
        </NavLink>
      </div>
      <div className="topics-container">
        <ul className="topics-list">
          <li className="dropdown">
            <span className="topic">Topics</span>
            {/* <select >
              <option value={"Operating System"}>Operating System</option>
              <option value={'Data Structures and Algorithms'}>Data Structures and Algorithms</option>
              <option value={"Object Oriented Programming"}>Object Oriented Programming</option>
              <option value={'Database Management System'}>Database Management System</option>
            </select> */}
            <ul className="dropdown-content">
            <li>
              <Link to="/cards/Operating%20System">Operating system</Link>
            </li>
            <li>
              <Link to="/cards/DataBase%20Management%20System">Database Management system</Link>
            </li>
            <li>
              <Link to="/cards/Data%20Structure%20and%20Algorithm">Data Structure and Algorithm</Link>
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
