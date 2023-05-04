import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Client from './Contentful';
import Section from './Section';
import './MainMenu.css';
import './Footer.css';

function MainMenu() {
  const [mission, setMission] = useState();

  const [webProjects, setWebProjects] = useState();

  const [gasProjects, setGasProjects] = useState();

  const [aboutMe, setAboutMe] = useState();

  useEffect(() => {
    Client.getEntries({ content_type: "mission" }).then((missionData) =>
      setMission(missionData)
    );
  }, []);

  useEffect(() => {
    Client.getEntries({ content_type: "webProject" }).then((webProjectsData) =>
      setWebProjects(webProjectsData)
    );
  }, []);

  useEffect(() => {
    Client.getEntries({ content_type: "gasProject" }).then((gasProjectsData) =>
      setGasProjects(gasProjectsData)
    );
  }, []);

  useEffect(() => {
    Client.getEntries({ content_type: "aboutMe" }).then((aboutMeData) =>
      setAboutMe(aboutMeData)
    );
  }, []);

  return (
    <div className="main">
      <div className="headline" id='home'>KYLE PHILLIPS</div>
      <div className="sub-header"> RECENTLY QUALIFIED FULL-STACK DEVELOPER</div>
      <img
        src={require("./img/hey.png")}
        alt="personal avatar"
        className="avatar"
      />
      <div className="mission">
        {mission && mission.items[0].fields.missionStatement}
      </div>
      <h2 id='projects'>Web Projects</h2>
        <div className="section">
          {webProjects &&
            webProjects.items
              .sort((a, b) => a.fields.sortOrder - b.fields.sortOrder)
              .map((item, index) => 
              <Link className="project-link" to={`/web/${item.sys.id}`}>
                <Section props={item} key={item.sys.id} />
              </Link>)}
        </div>
      <h2>Google App Projects</h2>
        <div className="section">
          {gasProjects &&
            gasProjects.items.map((item, index) => (
              <Link className="project-link" to={`/gas/${item.sys.id}`}>
              <Section props={item} key={item.sys.id} />
              </Link>
            ))}
        </div>
      <div className="mission" id='about-me'>
        <h2>About Me</h2>
        <p>{aboutMe && aboutMe.items[0].fields.text}</p>
      </div>
      <img
        src={require("./img/logo.png")}
        alt="personal logo"
        className="logo"
      />
      <div className="section">© Justin Kyle Phillips 2023</div>
    </div>
  );
}

export default MainMenu;
