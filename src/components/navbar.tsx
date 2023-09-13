import { FC } from "react";

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
