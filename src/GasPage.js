import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Client from './Contentful';
import "./MainMenu.css";

function GasPage() {
    
  const { project } = useParams();  

  const [gasProjects, setGasProjects] = useState();
console.log(project)
  useEffect(() => {
    Client.getEntry({ content_type: "gasProject" }).then((gasProjectsData) =>
      setGasProjects(gasProjectsData)
    );
  }, []);

console.log(gasProjects)

  return (
    <div className="main">
      <h2>Name Goes Here</h2>
      <div className="section">
      </div>
    </div>
  );
}

export default GasPage;
