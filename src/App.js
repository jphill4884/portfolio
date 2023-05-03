import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import ProjectPage from './ProjectPage';
import GasPage from './GasPage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/web/:projectId" element={<ProjectPage />} />
        <Route path="/gas/:gasId" element={<GasPage />} />
      </Routes>
    </div>
  );
}

export default App;
