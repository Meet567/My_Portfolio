import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Navbar from "./Portfoilio/Navbar";
import Abou from "./Portfoilio/Abou";
import Cont from "./Portfoilio/Cont";
import Foot from "./Portfoilio/Foot";
import Nav from "./Portfoilio/Nav";
import Hom from "./Portfoilio/Hom";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Nav />
      <Routes>
        <Route path="/" element={<Hom />} />
        <Route path="abou" element={<Abou />} />
        <Route path="/cont" element={<Cont />} />
      </Routes>
      <Foot />
    </div>
  );
}

export default App;
