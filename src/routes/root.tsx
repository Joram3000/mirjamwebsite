import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "./style.css";

export default function Root() {
  return (
    <>
      <Navbar />

      <Outlet />

      <Footer />
    </>
  );
}
