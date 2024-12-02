import React from "react";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <ul className="nav-links">
        <li>Home Page</li>
        <li>Our Services</li>
        <li>Contact Us</li>
        <li className="dropdown">
          Industries <span className="dropdown-icon">▼</span>
        </li>
      </ul>
      <div className="buttons">
        <button className="custom-button">Custom</button>
        <button className="prebuilt-button">Pre-built</button>
      </div>
    </nav>
  );
};

export default Navbar;
