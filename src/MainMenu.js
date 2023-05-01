import React from "react";
import { useEffect, useState } from "react";
import Client from "./Contentful";
import Section from "./Section"
import "./MainMenu.css";

function MainMenu() {

  const [mission, setMission] = useState();
  
  const [gasProjects, setGasProjects] = useState();

  const [aboutMe, setAboutMe] = useState(); 

  useEffect(() => {
    Client.getEntries({ content_type: "mission"}).then((missionData) => setMission(missionData));
  }, []);

  useEffect(() => {
    Client.getEntries({ content_type: "gasProject"}).then((gasProjectsData) => setGasProjects(gasProjectsData));
  }, []);

  useEffect(() => {
    Client.getEntries({ content_type: "aboutMe"}).then((aboutMeData) => setAboutMe(aboutMeData));
  }, []);

console.log(aboutMe)

  return (
    <div className="main">
    <div className="headline">KYLE PHILLIPS</div>
    <div className="sub-header"> RECENTLY QUALIFIED FULL-STACK DEVELOPER</div>
    <img src={require("./img/hey.png")} alt="personal avatar" className="avatar" />
    <div className="mission">
    {mission && mission.items[0].fields.missionStatement}
    </div>
    <div className="section">
      <h2>Web Projects</h2>
    </div>
    <div className="section">
      <h2>Google App Projects</h2>
      {gasProjects && gasProjects.items.map((item, index) => (<Section props={item} key={index} />))}
    </div>
    <div className="mission">
      <h2>About Me</h2>
      <p>{aboutMe && aboutMe.items[0].fields.text}</p>
    </div>
    <img src={require("./img/logo.png")} alt="personal logo" className="logo" />
    </div>
  );
}

export default MainMenu;
