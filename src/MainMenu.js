import React from "react";
import "./MainMenu.css";

function MainMenu() {
  
  return (
    <div className="main">
    <div className="headline">KYLE PHILLIPS</div>
    <div className="sub-header"> RECENTLY QUALIFIED FULL-STACK DEVELOPER</div>
    <img src={require("./img/hey.png")} alt="personal avatar" className="avatar" />
    <img src={require("./img/logo.png")} alt="personal logo" className="logo" />
    </div>
  );
}

export default MainMenu;
