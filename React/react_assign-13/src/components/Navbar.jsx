import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="primary">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/about-us">About</NavLink>
      <NavLink to='/services'>Services</NavLink>
      <NavLink to="/login">Login</NavLink>
    </nav>
  );
};
