import { NavLink } from "react-router";
import ToggleTheme from "./ToggleTheme"; 

const Navbar = () => {

  // TODO: Show count next to Cart

  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
       <NavLink to="/cart">Cart</NavLink>
      <ToggleTheme /> 
    </nav>
  );
};

export default Navbar;
