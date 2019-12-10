import React from "react";
import { NavLink } from "react-router-dom";

function Menu() {
  return (
    <nav>
      <NavLink to="/overview">Overview</NavLink>
      <NavLink to="/">Currencies</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </nav>
  );
}

export default Menu;
