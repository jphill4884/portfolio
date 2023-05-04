import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropagateLoader from 'react-spinners/PropagateLoader';
import Client from './Contentful';
import ProjectImage from './ProjectPageImage';
import './MainMenu.css';
import NavBar from './NavBar';
import './NavBar.css';
import Footer from './Footer';
import './Footer.css';
import './ProjectPage.css';

function GasPage() {
  const { gasId } = useParams();

  const [ isLoading, setIsLoading ] = useState(true);

  const [gasProject, setGasProject] = useState();

  useEffect(() => {
    Client.getEntry(gasId).then((gasProjectData) =>
      setGasProject(gasProjectData)
    );
    setIsLoading(false);
  }, [gasId, setIsLoading]);
console.log(gasProject)

  if (isLoading) {
    return <PropagateLoader color="#C0C0C0" size={350} speed={20} />;
  } else if (!gasProject){
    return <PropagateLoader color="#C0C0C0" size={350} speed={20} />;
  } else {
    return (
      <div>
      <NavBar />
      <div className="main">
        <h1>{gasProject && gasProject.fields.name}</h1>
        <img
          src={"https:" + gasProject && gasProject.fields.coverImage.fields.file.url}
          className="project-image"
          alt="screencap of project"
        />
        <div className="project-description">
          <span>{gasProject && gasProject.fields.description}</span>
          <hr />
        </div>
        <div className="pic-collage">
          {gasProject && gasProject.fields.projectImages.map((item, index) => <ProjectImage props={item} key={index} />)}
        </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default GasPage;
