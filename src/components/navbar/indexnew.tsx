import { Group, Burger, Image, Text, Button, Anchor } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import logo from "../../assets/images/logo.png";

const NavbarNew: React.FC = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <Group align="center" justify="space-between" h={100}>
      <Image src={logo} />

      <Burger
        opened={opened}
        onClick={toggle}
        hiddenFrom="lg"
        size="sm"
        m="lg"
      />

      <Group visibleFrom="lg" m="xl">
        <Anchor href="/#/home">Home</Anchor>
        <Anchor href="/#/about">Over Mirjam</Anchor>
        <Text>Coaching</Text>
        <Text>Training</Text>
        <Text>Systeemspel</Text>
        <Button>Contact Opnemen</Button>
      </Group>
    </Group>
  );
};

export default NavbarNew;
