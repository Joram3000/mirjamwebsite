import "./App.css";
import Footer from "./components/footer/index";
import Navbar from "./components/navbar";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import HomePage from "./pages/HomePage";
import UnderConstructionPage from "./pages/UnderConstruction";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<UnderConstructionPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>

      {/* <div className="layout">
        <UnderConstructionPage />
      </div> */}
      <Footer />
    </>
  );
}

export default App;
