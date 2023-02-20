import React from "react";
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <header>
      <nav className="nav">
        <h1 className="nav-title">Natalie .S. Mbatha</h1>
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-list-item">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="nav-list-item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;
