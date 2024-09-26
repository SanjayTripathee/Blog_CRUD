import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav style={{ backgroundColor: "blue" }}>
        <NavLink to="/blog" style={{ margin: "20px", color: "white" }}>
          Blogs
        </NavLink>

        <NavLink
          to="/blog/create"
          style={{ margin: "20px", color: "white" }}
        >
          Create Blogs
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
