import { Group, Burger, Image, Text, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import logo from "../../assets/images/logo.png";

const NavbarNew: React.FC = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <Group align="center" justify="space-between" h="100%" bg="red">
      <Image src={logo} />

      <Burger opened={opened} onClick={toggle} hiddenFrom="lg" size="sm" />

      <Group visibleFrom="lg">
        <Text>Home</Text>
        <Text>Over Mirjam</Text>
        <Text>Coaching</Text>
        <Text>Training</Text>
        <Text>Systeemspel</Text>
        <Button>Contact Opnemen</Button>
      </Group>
    </Group>
  );
};

export default NavbarNew;
