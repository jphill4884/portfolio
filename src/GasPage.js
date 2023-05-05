import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import RingLoader from "react-spinners/RingLoader";
import Client from "./Contentful";
import ProjectImage from "./ProjectPageImage";
import NavBar from "./NavBar";
import "./NavBar.css";
import Footer from "./Footer";
import "./Footer.css";
import "./ProjectPage.css";

function GasPage() {
  const { gasId } = useParams();

  const [isLoading, setIsLoading] = useState(true);

  const [gasProject, setGasProject] = useState();

  useEffect(() => {
    Client.getEntry(gasId).then((gasProjectData) =>
      setGasProject(gasProjectData)
    );
    setIsLoading(false);
  }, [gasId, setIsLoading]);

  if (isLoading) {
    return (
      <div className="loader">
        <RingLoader color="#C0C0C0" size={300} speed={20} />
      </div>
    );
  } else if (!gasProject) {
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
          <h1>{gasProject && gasProject.fields.name}</h1>
          <img
            src={
              "https:" + gasProject &&
              gasProject.fields.coverImage.fields.file.url
            }
            className="project-image"
            alt="screencap of project"
          />
          <div className="project-description">
            <span>{gasProject && gasProject.fields.description}</span>
            <hr />
          </div>
          <div className="pic-collage">
            {gasProject &&
              gasProject.fields.projectImages.map((item, index) => (
                <Link className="project-link" to={`/detail/${item.sys.id}`}>
                  <ProjectImage props={item} key={index} />
                </Link>
              ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default GasPage;
