import { useState } from "react";

import classes from "./NavbarSimple.module.css";
import { menuData } from "./indexnew";
import { NavLink } from "@mantine/core";

export function NavbarSimple() {
  const [active, setActive] = useState("Home");

  const links = menuData.map((item) => (
    <NavLink
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.linkTo}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      {item.label}
    </NavLink>

    // <a
    //   className={classes.link}
    //   data-active={item.label === active || undefined}
    //   href={item.linkTo}
    //   key={item.label}
    //   onClick={(event) => {
    //     event.preventDefault();
    //     setActive(item.label);
    //   }}
    // >
    //   {item.label}
    // </a>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>{links}</div>
    </nav>
  );
}
