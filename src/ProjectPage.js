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

function ProjectPage() {
  const { projectId } = useParams();

  const [ isLoading, setIsLoading ] = useState(true);

  const  [webProject, setWebProject ] = useState();

  useEffect(() => {
    Client.getEntry(projectId).then((webProjectData) =>
      setWebProject(webProjectData)
    );
    setIsLoading(false);
  }, [projectId, setIsLoading]);

  if (isLoading) {
    return <PropagateLoader color="#C0C0C0" size={350} speed={20} />;
  } else if (!webProject){
    return <PropagateLoader color="#C0C0C0" size={350} speed={20} />;
  } else {
    return (
      <div>
      <NavBar />
      <div className="main">
        <h1>{webProject && webProject.fields.name}</h1>
        <img
          src={"https:" + webProject && webProject.fields.coverImage.fields.file.url}
          className="project-image"
          alt="screencap of project"
        />
        <div className="project-description">
          <span>{webProject && webProject.fields.description}</span>
          <hr />
        </div>
        <div className="pic-collage">
          {webProject && webProject.fields.projectImages.map((item, index) => <ProjectImage props={item} key={index} />)}
        </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ProjectPage;