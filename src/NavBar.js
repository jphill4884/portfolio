import React from "react";
import "./NavBar.css";
//import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar">
        <span className="navbar-link">Projects</span>
        <span className="navbar-link">Something</span>
        <span className="navbar-link">Resume</span>
      </div>
  );
}
