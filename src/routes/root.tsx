import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../main.css";

export default function Root() {
  return (
    <>
      <Navbar />
      <div id="layout">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
