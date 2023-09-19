import { Routes, Route } from "react-router-dom";
import Blue from "./Blue";
import Red from "./Red";
import Home from "./Home";
import Cyan from "./Cyan";
import Green from "./Green";
import Purple from "./Purple";
import Yellow from "./Yellow";

function MainSection() {
  return (
    <div id="main-section">
      <Routes>
        <Route path="/blue" element={<Blue />} />
        <Route path="/red" element={<Red />} />
        <Route path="/" element={<Home />} />
        <Route path="/cyan" element={<Cyan />} />
        <Route path="/green" element={<Green />} />
        <Route path="/purple" element={<Purple />} />
        <Route path="/yellow" element={<Yellow />} />
      </Routes>
    </div>
  );
}

export default MainSection;
