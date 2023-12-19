import { FC } from "react";
import { useState } from "react";
import styles from "./style.module.css";

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
          <a href="/" className={`${styles.logo}`}>
            DEV
          </a>

          <ul className={`${styles.navMenu} ${isActive ? styles.active : ""}`}>
            <li onClick={removeActive}>
              <a href="/home" className={`${styles.navLink}`}>
                Home
              </a>
            </li>

            <li onClick={removeActive}>
              <a href="/about" className={`${styles.navLink}`}>
                About
              </a>
            </li>
            <li onClick={removeActive}>
              <a href="/contact" className={`${styles.navLink}`}>
                Contact
              </a>
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
