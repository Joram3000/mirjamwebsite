import {
  Title,
  Text,
  Group,
  Button,
  Divider,
  Container,
  Anchor,
  Box,
  useMantineTheme,
  Stack,
} from "@mantine/core";

import EthischeCode from "../../assets/docs/2022-ethische-code-phoenix-opleidingen-voor-deelnemers.pdf";
import LeveringsVoorwaarden from "../../assets/docs/Leveringsvoorwaarden.pdf";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const theme = useMantineTheme();

  const contactGegevens = [
    "Mirjam Kroon-Hoekendijk",
    "Dorpsweg 71",
    "4223 ND",
    "Hoornaar",
    "Zuid-Holland",
    "mirjam@kroontrainingadvies.com",
    "0653507815",
  ];

  const links = [
    {
      label: "Algemene voorwaarden",
      link: LeveringsVoorwaarden,
    },
    {
      label: "Ethische code",
      link: EthischeCode,
    },
  ];

  return (
    <Box bg={theme.colors.custom[2]} c="white" pt="md">
      <Container>
        <Group justify="space-between" pb="lg">
          <Title order={1}>Contact</Title>

          <Link to="/contact">
            <Button>Neem contact op</Button>
          </Link>
        </Group>

        {contactGegevens.map((gegeven) => (
          <Text key={gegeven}>{gegeven}</Text>
        ))}

        <Divider my="lg" color="white" size="xs" />

        <Group justify="space-between" align="flex-end" pb="lg">
          <Stack>
            {links.map((link) => (
              <Anchor
                key={link.label}
                href={link.link}
                target="_blank"
                underline="always"
              >
                {link.label}
              </Anchor>
            ))}
          </Stack>

          <Anchor href="https://www.kibbelingmedia.nl/" target="_blank">
            2023 Kibbeling Media. All rights reserved.
          </Anchor>
        </Group>
      </Container>
    </Box>
  );
};

export default Footer;
