import "./App.css";
import Footer from "./components/footer/index";
import UnderConstructionPage from "./pages/UnderConstruction";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import HomePage from "./pages/Home";

function App() {
  return (
    <>
      {/* <Navbar /> */}

      <div className="layout">
        <UnderConstructionPage />

        {/* <Routes>
          <Route path="/" element={<UnderConstructionPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes> */}
      </div>
      <Footer />
    </>
  );
}

export default App;
