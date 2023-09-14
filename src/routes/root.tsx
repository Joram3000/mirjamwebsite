import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/navbar";

export default function Root() {
  return (
    <>
      <Navbar />

      <div id="sidebar">
        {/* <nav>
          <ul>
            <li>
              <Link to={`contacts/1`}>Your Name</Link>
            </li>
            <li>
              <Link to={`contacts/2`}>Your Friend</Link>
            </li>
          </ul>
        </nav> */}

        <div id="detail">
          <Outlet />
        </div>
      </div>
    </>
  );
}
