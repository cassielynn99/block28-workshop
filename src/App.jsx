import "./App.css";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";

// to view: http://localhost:5173/

function App() {
  return (
    <>
      <div id="container">
        <div id="navbar">
          <Navbar />
        </div>
        <div id="main-section">
          <MainSection />
        </div>
        <div id="footer">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
