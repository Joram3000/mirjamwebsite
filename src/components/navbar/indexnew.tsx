import {
  Group,
  Burger,
  Image,
  Button,
  Stack,
  Collapse,
  Container,
  useMantineTheme,
  Box,
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

  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState("Home");
  const location = useLocation();

  useEffect(() => {
    const currentMenuItem = menuData.find(
      (item) => item.link === location.pathname
    );
    if (currentMenuItem) {
      setActive(currentMenuItem.label);
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
      style={{
        textDecoration: item.label === active ? "underline" : "none",
        color: theme.colors.custom[2],
      }}
    >
      {item.label}
    </NavLink>
  ));

  return (
    <Box p={0} bg={theme.colors.custom[0]}>
      <Group justify="space-between" align="center" py="md">
        <Link to="/home">
          <Image
            visibleFrom="md"
            src={logo}
            onClick={() => onClickNavLink("Home")}
          />
        </Link>

        <Group align="center" justify="space-between" w="100%" hiddenFrom="md">
          <Link to="/home">
            <Image src={logo} onClick={() => onClickNavLink("Home")} w={150} />
          </Link>
          <Burger
            opened={opened}
            onClick={toggle}
            color="black"
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

        <Group visibleFrom="md" pr="md">
          {menuItems}
          <NavLink to="/contact" onClick={() => setActive("Contact")}>
            <Button>Contact</Button>
          </NavLink>
        </Group>
      </Group>
    </Box>
  );
};

export default NavbarNew;
