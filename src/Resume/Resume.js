import "./Resume.css";
import SideBar from "./Sidebar";
import Main from "./Main";
import NavBar from "../NavBar";
import "../NavBar.css";
import { useState, useEffect } from 'react';
import client from './Contentful';
import saveAs from 'file-saver';

function Resume() {

  const [resumePdf, setResumePdf] = useState();

  useEffect(() => {
    client
      .getAsset("1WFVIY50X1Dndrd9faAR5E")
      .then((download) => setResumePdf(download));
    }, []);
    
  const blob = ('https:' + (resumePdf && resumePdf.fields.file.url));

  const downloadPdf = () => {
    saveAs(blob, "Kyle_Phillips_Resume.pdf")
  };

  return (
    <div>
      <NavBar />
      <div className="download-button">
          <button onClick={downloadPdf} >Download</button>
      </div>
      <div className="resume">
        <SideBar />
        <Main />
      </div>
    </div>
  );
}

export default Resume;
