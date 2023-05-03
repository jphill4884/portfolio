import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Client from './Contentful';
import './MainMenu.css';

function ProjectPage() {

  const { projectId } = useParams();

  const [webProject, setWebProject] = useState();

  useEffect(() => {
    Client.getEntry( projectId ).then((webProjectData) =>
      setWebProject(webProjectData)
    );
  }, [projectId]);

  return (
    <div className="main">
      <h2>{webProject.fields.name}</h2>
      <img src={'https:' + webProject.fields.coverImage.fields.file.url} className='page-image' alt='screencap of project' />
      <div className="section">
        <span>{webProject.fields.description}</span>
      </div>
    </div>
  );
}

export default ProjectPage;
