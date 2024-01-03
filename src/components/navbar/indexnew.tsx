import {
  Group,
  Burger,
  Image,
  Button,
  Anchor,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import logo from "../../assets/images/logo.png";

const NavbarNew: React.FC = () => {
  const theme = useMantineTheme();
  const [opened, { toggle }] = useDisclosure();

  return (
    <Group
      align="center"
      justify="space-between"
      h={100}
      bg={theme.colors.custom[0]}
    >
      <Image src={logo} />

      <Burger
        opened={opened}
        onClick={toggle}
        hiddenFrom="lg"
        size="sm"
        m="lg"
      />

      <Group visibleFrom="lg" m="xl">
        <Anchor c={theme.colors.custom[1]} href="/#/home">
          Home
        </Anchor>
        <Anchor c={theme.colors.custom[1]} href="/#/about">
          Over Mirjam
        </Anchor>
        <Anchor c={theme.colors.custom[1]} href="/#/coaching">
          Coaching
        </Anchor>
        <Anchor c={theme.colors.custom[1]} href="/#/training">
          Training
        </Anchor>
        <Anchor c={theme.colors.custom[1]} href="/#/systeemspel">
          Systeemspel
        </Anchor>
        <Anchor c={theme.colors.custom[1]} href="/#/contact">
          <Button>Contact Opnemen</Button>
        </Anchor>
      </Group>
    </Group>
  );
};

export default NavbarNew;
