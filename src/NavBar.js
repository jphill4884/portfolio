import React from "react";
import "./NavBar.css";
//import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={require("./img/logo.jpg")} alt="developer's logo with initials and full name" className="logo-image"/>
      </div>
      <div className="middle"></div>
      <div className="right">
        <span className="navbar-link">Projects</span>
        <span className="navbar-link">Something</span>
        <span className="navbar-link">Resume</span>
      </div>
    </div>
  );
}
