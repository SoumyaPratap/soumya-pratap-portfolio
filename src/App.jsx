import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import MeetSphere from "./pages/MeetSphere";
import SigmaGPT from "./pages/SigmaGPT";
import SkillsPage from "./pages/SkillsPage";
import CertificatesPage from "./pages/CertificatesPage";


function App() {
return ( <BrowserRouter> <div className="min-h-screen text-white bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.15),_transparent_25%),radial-gradient(circle_at_bottom_left,_rgba(168,85,247,0.15),_transparent_25%),linear-gradient(to_bottom,_#09090b,_#000000,_#09090b)]">

    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/skills" element={<SkillsPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/projects/meetsphere" element={<MeetSphere />} />
      <Route path="/projects/sigma-gpt" element={<SigmaGPT />} />
      <Route
  path="/certificates"
  element={<CertificatesPage />}
/>
    </Routes>

  </div>
</BrowserRouter>


);
}

export default App;
