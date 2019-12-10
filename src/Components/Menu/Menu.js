import React from "react";
import { Link } from "react-router-dom";
function Menu() {
  return (
    <nav>
      <Link to="/overview">Overview</Link>
      <Link to="/">Currencies</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Menu;
