import "./App.css";
import Footer from "./components/footer/index";
import Navbar from "./components/navbar";
import UnderConstructionPage from "./pages/UnderConstruction";

function App() {
  return (
    <>
      <Navbar />
      <div className="layout">
        <UnderConstructionPage />
      </div>
      <Footer />
    </>
  );
}

export default App;
