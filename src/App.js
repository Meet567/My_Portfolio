import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Portfoilio/Navbar";
import Home from "./Portfoilio/Home";
import AboutMe from "./Portfoilio/AboutMe";
import Education from "./Portfoilio/Education";
import Skill from "./Portfoilio/Skill";
import Contact from "./Portfoilio/Contact";
import Footer from "./Portfoilio/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutMe />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
