// components/Navbar.jsx
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const { pathname } = useLocation();
  const isSoftepy = pathname.startsWith("/softepy");

  const base = isSoftepy ? "/softepy" : "/pulpepy";

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><NavLink to={`${base}/home`}>Home</NavLink></li>
        <li><NavLink to={`${base}/about`}>About Us</NavLink></li>
        <li><NavLink to={`${base}/product`}>Product</NavLink></li>
        <li><NavLink to={`${base}/franchise`}>Franchise</NavLink></li>
        <li><NavLink to={`${base}/location`}>Location</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
