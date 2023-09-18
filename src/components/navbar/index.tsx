import { FC } from "react";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

const Navbar: FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <nav className={`${styles.navbar}`}>
          <Link to="/">Kroon Training & Advies</Link>

          <ul className={styles.navMenu}>
            <li>
              <Link className={`${styles.navLink}`} to="/home">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className={`${styles.navLink}`}>
                About
              </Link>
            </li>

            <li>
              <Link to="/contact" className={`${styles.navLink}`}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
