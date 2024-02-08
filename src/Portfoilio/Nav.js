import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div style={{ display: "flex", padding: "10px", backgroundColor: "aqua" }}>
      <NavLink to="/"> Home </NavLink>
      <NavLink to="abou"> About </NavLink>
      <NavLink to="cont"> Contact </NavLink>
    </div>
  );
}
export default Nav;
