// src/ProductNavbar.js
import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function ProductNavbar() {
  return (
    <header>
      {/* Single nav container for all your pages */}
      <nav className="nav-container">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/second"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Missions
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/third"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Third Page
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default ProductNavbar;