import { useEffect, useState } from "react";
import client from "./Contentful.js";
import "./Main.css";
import Mission from "./Mission.js";
import Job from "./Job.js";
import Education from "./Education.js";
import SkillSection from "./SkillSection.js";

function Main() {
  const [skills, setSkills] = useState();
  const [jobHistory, setJobHistory] = useState();
  const [education, setEducation] = useState();
  const [mission, setMission] = useState();

  useEffect(() => {
    client
      .getEntries({ content_type: "jobResponsibility" })
      .then((skillData) => setSkills(skillData));
  }, []);

  useEffect(() => {
    client
      .getEntries({ content_type: "job" })
      .then((jobData) => setJobHistory(jobData));
  }, []);

  useEffect(() => {
    client
      .getEntries({ content_type: "education" })
      .then((schoolData) => setEducation(schoolData));
  }, []);

  useEffect(() => {
    client
      .getEntries({ content_type: "mission" })
      .then((missionData) => setMission(missionData));
  }, []);
  console.log(skills)
  return (
      <div className="main-resume">
        <div className="divider-row">
          <img
            src={require("../img/career.png")}
            alt="briefcase icon"
            className="large-icon"
          />
          <div className="divider-large">PROFILE</div>
        </div>
        <div className="body-resume">
          {mission &&
            mission.items.map((item, index) => (
              <Mission props={item} key={index} />
            ))}
        </div>
        <div className="divider-row">
          <img
            src={require("../img/strategy.png")}
            alt="chart icon"
            className="large-icon"
          />
          <div className="divider-large">SKILLS</div>
        </div>
        <div className="body-resume">
        <div className="company">Technical Skills</div>
          <div>
            {skills &&
              skills.items
                .filter(skill => skill.fields.filterTag === 'Technical')
                .map((item, index) => <SkillSection props={item} key={index} />)}
          </div>
        <div className="company">Transferrable Skills</div>
          <div>
            {skills &&
              skills.items
                .filter(skill => skill.fields.filterTag === 'Transferable')
                .map((item, index) => <SkillSection props={item} key={index} />)}
          </div>
        </div>
        <div className="divider-row">
          <img
            src={require("../img/strategy.png")}
            alt="chart icon"
            className="large-icon"
          />
          <div className="divider-large">CAREER</div>
        </div>
        <div className="body-resume">
          <div>
            {jobHistory &&
              jobHistory.items
                .sort((a, b) => a.fields.sortOrder - b.fields.sortOrder)
                .map((item, index) => <Job props={item} key={index} />)}
          </div>
        </div>
        <div className="divider-row">
          <img
            src={require("../img/graduation.png")}
            alt="graduation cap icon"
            className="large-icon"
          />
          <div className="divider-large">EDUCATION</div>
        </div>
        <div className="body-resume">
          {education &&
            education.items
              .sort((a, b) => a.fields.sortOrder - b.fields.sortOrder)
              .map((item, index) => <Education props={item} key={index} />)}
        </div>
      </div>
  );
}

export default Main;
