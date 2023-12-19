import {
  Title,
  Text,
  Group,
  Button,
  Divider,
  Container,
  Anchor,
  Box,
} from "@mantine/core";
import "./footer.module.css";

const Footer: React.FC = () => {
  const contactGegevens = [
    "Mirjam Kroon-Hoekendijk",
    "Dorpsweg 71",
    "4223 ND",
    "Hoornaar",
    "Zuid-Holland",
    "mirjam@kroontrainingadvies.com",
    "0653507815",
  ];

  return (
    <Box bg="darkBlue">
      <Container p="xl">
        <Group justify="space-between" pb="lg">
          <Title>Contact</Title>
          <Button>Neem contact op</Button>
        </Group>

        {contactGegevens.map((gegeven) => (
          <Text>
            <li>{gegeven}</li>
          </Text>
        ))}

        <Divider my="lg" color="white" size="xs" />

        <Group justify="space-between" align="flex-end" pb="lg">
          <Anchor href="" target="_blank" underline="always">
            <li>Privacyverklaring</li>
            <li>Disclaimer</li>
            <li>Algemene voorwaarden</li>
          </Anchor>
          <Text>2023 Kibbeling Media. All right reserved.</Text>
        </Group>
      </Container>
    </Box>
  );
};

export default Footer;
