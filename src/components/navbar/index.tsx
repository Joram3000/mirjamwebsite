import {
  Group,
  Burger,
  Image,
  Button,
  Stack,
  Collapse,
  useMantineTheme,
  Box,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import logo from "../../../public/assets/images/logo.webp";
import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const menuData = [
  {
    name: "Home",
    path: "/home",
  },
  {
    name: "Over Mirjam",
    path: "/about",
  },
  {
    name: "Coaching",
    path: "/coaching",
  },
  {
    name: "Training",
    path: "/training",
  },
  {
    name: "Systeemspel",
    path: "/systeemspel",
  },
];

const NavbarNew: React.FC = () => {
  const theme = useMantineTheme();
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState("Home");
  const location = useLocation();

  useEffect(() => {
    const currentMenuItem = menuData.find(
      (item) => item.path === location.pathname
    );
    if (currentMenuItem) {
      setActive(currentMenuItem.name);
    }
  }, [location.pathname]);

  const onClickNavLink = (name: string) => {
    setActive(name);
    close();
  };

  const menuItems = menuData.map((item) => (
    <NavLink
      to={item.path}
      key={item.name}
      onClick={() => onClickNavLink(item.name)}
      style={{
        textDecoration: item.name === active ? "underline" : "none",
        color: theme.colors.custom[2],
      }}
    >
      {item.name}
    </NavLink>
  ));

  return (
    <Box bg={theme.colors.custom[0]}>
      <Group justify="space-between" align="center" h={90}>
        <Link to="/home">
          <Image src={logo} onClick={() => onClickNavLink("Home")} h={70} />
        </Link>

        <Group visibleFrom="md" pr="md">
          {menuItems}
          <NavLink to="/contact" onClick={() => setActive("Contact")}>
            <Button>Contact</Button>
          </NavLink>
        </Group>

        <Burger
          pr="xl"
          opened={opened}
          onClick={toggle}
          color="black"
          hiddenFrom="md"
          size="sm"
        />
      </Group>

      <Collapse
        in={opened}
        onClick={toggle}
        transitionDuration={200}
        animateOpacity
      >
        <Stack pb="md" align="stretch" ta="center">
          {menuItems}

          <NavLink to="/contact" onClick={() => onClickNavLink("Contact")}>
            <Button>Contact</Button>
          </NavLink>
        </Stack>
      </Collapse>
    </Box>
  );
};

export default NavbarNew;
