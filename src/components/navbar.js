import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "black", padding: "10px" }}>
      <div>
        <h1 style={{ color: "yellow" }}>BYOD - Bring Your Own Design</h1>
        <p style={{ color: "yellow" }}>Design it, own it, wear it</p>
      </div>
      <ul style={{ listStyleType: "none", display: "flex" }}>
        <li><Link to="/" style={{ color: "yellow", padding: "10px" }}>Home</Link></li>
        <li><Link to="/about" style={{ color: "yellow", padding: "10px" }}>About Us</Link></li>
        <li><Link to="/my-account" style={{ color: "yellow", padding: "10px" }}>My Account</Link></li>
        <li><Link to="/cart" style={{ color: "yellow", padding: "10px" }}>Cart</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
