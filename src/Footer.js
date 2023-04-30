import React from "react";
import "./Footer.css";
//import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="left">
      <a href="https://www.github.com/jphill4884" target="_blank" rel="noreferrer">GitHub</a>
      </div>
      <div className="right">
      <span>© Justin Kyle Phillips 2023</span>
      </div>
    </div>
  );
}