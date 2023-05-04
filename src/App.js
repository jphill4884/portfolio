import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import ProjectPage from './ProjectPage';
import GasPage from './GasPage';
import Resume from './Resume/Resume';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/web/:projectId" element={<ProjectPage />} />
        <Route path="/gas/:gasId" element={<GasPage />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;
