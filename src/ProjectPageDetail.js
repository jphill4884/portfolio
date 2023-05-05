import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RingLoader from "react-spinners/RingLoader";
import Client from "./Contentful";
import NavBar from "./NavBar";
import "./NavBar.css";
import Footer from "./Footer";
import "./Footer.css";
import "./ProjectPage.css";

function DetailPage() {

  const { detailId } = useParams();
  
  const [isLoading, setIsLoading] = useState(true);

  const [projectDetail, setProjectDetail] = useState();

  useEffect(() => {
    Client.getAsset(detailId).then((projectDetailData) =>
      setProjectDetail(projectDetailData)
    );
    setIsLoading(false);
  }, [detailId, setIsLoading]);

  console.log(projectDetail)

  if (isLoading) {
    return (
      <div className="loader">
        <RingLoader color="#C0C0C0" size={300} speed={20} />
      </div>
    );
  } else if (!projectDetail) {
    return (
      <div className="loader">
        <RingLoader color="#C0C0C0" size={350} speed={20} />
      </div>
    );
  } else {
    return (
      <div>
        <NavBar />
        <div className="main">
          <h1>{projectDetail && projectDetail.fields.title}</h1>
          <img
            src={
              "https:" + projectDetail &&
              projectDetail.fields.file.url
            }
            className="project-image"
            alt="screencap of project"
          />
          <div className="project-description">
            <span>{projectDetail && projectDetail.fields.description}</span>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default DetailPage;