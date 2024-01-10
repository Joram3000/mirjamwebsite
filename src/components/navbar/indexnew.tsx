import { Group, Burger, Image, Button, useMantineTheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import logo from "../../assets/images/logo.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const menuData = [
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
  const [opened, { toggle }] = useDisclosure();
  const [active, setActive] = useState("Home");

  const menuItems = menuData.map((item) => (
    <NavLink
      to={item.link}
      key={item.label}
      style={{ backgroundColor: item.label === active ? "yellow" : "" }}
      onClick={() => setActive(item.label)}
    >
      {item.label}
    </NavLink>
  ));

  return (
    <Group h={100} bg={theme.colors.custom[0]} justify="space-between" p="md">
      <NavLink to="/">
        <Image src={logo} />
      </NavLink>

      <Burger
        opened={opened}
        onClick={toggle}
        hiddenFrom="lg"
        size="sm"
        m="lg"
      />

      <Group visibleFrom="lg">
        {menuItems}
        <NavLink to="/contact">
          <Button>Contact</Button>
        </NavLink>
      </Group>
    </Group>
  );
};

export default NavbarNew;
