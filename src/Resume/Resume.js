import "./Resume.css";
import SideBar from "./Sidebar";
import Main from "./Main";
import NavBar from "../NavBar";
import "../NavBar.css";

function Resume() {
  return (
    <div>
      <NavBar />
      <div className="resume">
        <SideBar />
        <Main />
      </div>
    </div>
  );
}

export default Resume;
