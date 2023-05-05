import "./Resume.css";
import SideBar from "./Sidebar";
import Main from "./Main";
import NavBar from "../NavBar";
import "../NavBar.css";

function Resume() {
  return (
    <div>
      <NavBar />
      <div className="download-button">
        <a
          href="../img/Kyle_Phillips_Resume.pdf"
          download="Kyle_Phillips_Resume.pdf"
        >
          <button type="button">Download</button>
        </a>
      </div>
      <div className="resume">
        <SideBar />
        <Main />
      </div>
    </div>
  );
}

export default Resume;
