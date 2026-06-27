import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/layout/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Journey from "./pages/Journey";
import Projects from "./pages/Projects";
import ProjectsAnalytics from "./pages/ProjectsAnalytics";
import ProjectsSoftware from "./pages/ProjectsSoftware";
import ProjectsAI from "./pages/ProjectsAI";
import Leadership from "./pages/Leadership";
import Experience from "./pages/Experience";
import Achievements from "./pages/Achievements";
import Certifications from "./pages/Certifications";
import Publications from "./pages/Publications";
import Gallery from "./pages/Gallery";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/journey" element={<Journey />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/analytics" element={<ProjectsAnalytics />} />
            <Route path="/projects/software" element={<ProjectsSoftware />} />
            <Route path="/projects/ai" element={<ProjectsAI />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
