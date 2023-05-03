import React, { useRef } from "react";
import "./NavBar.css";

export default function NavBar() {

  const projectsRef = useRef(null);

  const handleProjectsClick = () => {
    const lastChildElement = projectsRef.current?.lastElementChild;
    lastChildElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="navbar">
        <span onClick={handleProjectsClick} className="navbar-link">Projects</span>
        <span className="navbar-link">About Me</span>
        <span className="navbar-link">Resume</span>
      </div>
  );
}
