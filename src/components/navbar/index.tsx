import { FC } from "react";
import { useState } from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

const Navbar: FC = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav className={`${styles.navbar}`}>
          <Link className={`${styles.logo}`} to="/">
            Mirjam de Pirjam
          </Link>

          <ul className={`${styles.navMenu} ${isActive ? styles.active : ""}`}>
            <li onClick={removeActive}>
              <Link className={`${styles.navLink}`} to="/home">
                Home
              </Link>
            </li>

            <li onClick={removeActive}>
              <Link to="/about" className={`${styles.navLink}`}>
                About
              </Link>
            </li>

            <li onClick={removeActive}>
              <Link to="/contact" className={`${styles.navLink}`}>
                Contact
              </Link>
            </li>
          </ul>

          <div
            className={`${styles.hamburger} ${isActive ? styles.active : ""}`}
            onClick={toggleActiveClass}
          >
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
            <span className={`${styles.bar}`}></span>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
