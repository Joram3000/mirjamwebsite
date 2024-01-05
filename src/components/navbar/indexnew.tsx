import {
  Group,
  Burger,
  Image,
  Button,
  useMantineTheme,
  NavLink,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import logo from "../../assets/images/logo.png";
import { useState } from "react";

const NavbarNew: React.FC = () => {
  const theme = useMantineTheme();
  const [opened, { toggle }] = useDisclosure();
  const [active, setActive] = useState(0);

  const menuData = [
    {
      label: "home",
      linkTo: "/home",
    },
    {
      label: "Over Mirjam",
      linkTo: "/about",
    },
    {
      label: "Coaching",
      linkTo: "/coaching",
    },
    {
      label: "Training",
      linkTo: "/training",
    },
    {
      label: "Systeemspel",
      linkTo: "/systeemspel",
    },
  ];

  const menuItems = menuData.map((item, index) => (
    <NavLink
      href={item.linkTo}
      key={item.label}
      active={index === active}
      label={item.label}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <Group h={100} bg={theme.colors.custom[0]}>
      <Image src={logo} onClick={() => {}} />

      <Burger
        opened={opened}
        onClick={toggle}
        hiddenFrom="lg"
        size="sm"
        m="lg"
      />

      <Group grow>{menuItems}</Group>
    </Group>
  );
};

export default NavbarNew;
