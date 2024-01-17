import classes from "./NavbarSimple.module.css";
import { Link } from "react-router-dom";
import { menuData } from "./indexnew";

interface NavbarSimpleProps {
  isActive: string;
  setActive: (value: string) => void;
}

const NavbarSimple: React.FC<NavbarSimpleProps> = ({ isActive, setActive }) => {
  const links = menuData.map((item) => (
    <Link
      className={classes.link}
      data-active={item.label === isActive || undefined}
      key={item.label}
      to={item.link}
      onClick={() => {
        setActive(item.label);
      }}
    >
      {item.label}
    </Link>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>{links}</div>
    </nav>
  );
};

export default NavbarSimple;
