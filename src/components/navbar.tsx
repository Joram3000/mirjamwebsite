import { FC } from "react";

//TODO
// https://www.youtube.com/watch?v=SLfhMt5OUPI

const Navbar: FC = () => {
  return (
    <nav className="nav">
      <a href="/" className="siteTitle" />
      <ul>
        <li>
          <a href="/about" />
        </li>
        <li>
          <a href="/contact" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
