import {
  Group,
  Burger,
  Image,
  Button,
  useMantineTheme,
  Stack,
  Collapse,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import logo from "../../assets/images/logo.png";
import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export const menuData = [
  {
    label: "Home",
    link: "/home",
  },
  {
    label: "Over Mirjam",
    link: "/about",
  },
  {
    label: "Coaching",
    link: "/coaching",
  },
  {
    label: "Training",
    link: "/training",
  },
  {
    label: "Systeemspel",
    link: "/systeemspel",
  },
];

const NavbarNew: React.FC = () => {
  const theme = useMantineTheme();
  // const isMobile = useMediaQuery(`(max-width: ${em(750)})`);

  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState("Home");
  const location = useLocation();

  useEffect(() => {
    const currentMenuItem = menuData.find(
      (item) => item.link === location.pathname
    );
    if (currentMenuItem) {
      setActive(currentMenuItem.label);
    } else {
      setActive(""); // Reset active state if the path doesn't match any menu item
    }
  }, [location.pathname]);

  const onClickNavLink = (name: string) => {
    setActive(name);
    close();
  };

  const menuItems = menuData.map((item) => (
    <NavLink
      to={item.link}
      key={item.label}
      onClick={() => onClickNavLink(item.label)}
      style={{ color: item.label === active ? "blue" : "" }} // ACTIVE STYLES
    >
      {item.label}
    </NavLink>
  ));

  return (
    <Group
      bg={theme.colors.custom[0]}
      justify="space-between"
      align="center"
      p="md"

      // h={opened ? "100%" : 116}
    >
      <Link to="/home">
        <Image
          visibleFrom="lg"
          src={logo}
          onClick={() => onClickNavLink("Home")}
        />
      </Link>

      <Group align="center" justify="space-between" w="100%" hiddenFrom="lg">
        <Link to="/home">
          <Image src={logo} onClick={() => onClickNavLink("Home")} w={150} />
        </Link>
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="lg"
          size="sm"
          m="lg"
        />
      </Group>

      <Collapse in={opened} w="100%">
        <Stack align="center" justify="center">
          {menuItems}

          <NavLink to="/contact" onClick={() => onClickNavLink("Contact")}>
            <Button>Contact</Button>
          </NavLink>
        </Stack>
      </Collapse>

      <Group visibleFrom="lg">
        {menuItems}
        <NavLink to="/contact" onClick={() => setActive("Contact")}>
          <Button>Contact</Button>
        </NavLink>
      </Group>
    </Group>
  );
};

export default NavbarNew;
