import './App.css';
import { Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import ProjectListPage from './pages/ProjectListPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import EditProjectPage from './pages/EditProjectPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={ <Homepage /> } />
        <Route path="/projects" element={ <ProjectListPage /> } />
        <Route path="/projects/:projectId" element={ <ProjectDetailsPage /> } />
        <Route path="/projects/edit/:projectId" element={ <EditProjectPage /> } />
      </Routes>
    </div>
  );
}

export default App;
