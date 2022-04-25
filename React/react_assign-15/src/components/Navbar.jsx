import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-img-container">
        <h1 className="text-primary">KidKinder</h1>
      </div>
      <div className="nav-container">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact-us">Contact</NavLink>
        <NavLink to="/about">About</NavLink>
        
        <NavLink to="/students">Students</NavLink>
      </div>
    </nav>
  );
};
