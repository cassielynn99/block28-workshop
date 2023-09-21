import "./App.css";
// import Navbar from "./components/Navbar";
// import MainSection from "./components/MainSection";
// import Footer from "./components/Footer";
import Red from "./components/Red";
import Blue from "./components/Blue";
import Home from "./components/Home";
import Cyan from "./components/Cyan";
import Green from "./components/Green";
import Purple from "./components/Purple";
import Yellow from "./components/Yellow";
import { Link, Routes, Route } from "react-router-dom";

// to view: http://localhost:5173/

function App() {
  return (
    <>
      <div id="container">
        <div id="navbar">
          <Link to="/blue">Blue</Link>
          <Link to="/red">Red</Link>
          <Link to="/">Home</Link>
        </div>
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
        <div id="footer">
          <Link to="/cyan">Cyan</Link>
          <Link to="/green">Green</Link>
          <Link to="/purple">Purple</Link>
          <Link to="/yellow">Yellow</Link>
        </div>
      </div>
    </>
  );
}

export default App;
