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
import "./footer.module.css";
import { Link } from "react-router-dom";

export const contactGegevens = [
  "Mirjam Kroon-Hoekendijk",
  "Dorpsweg 71",
  "4223 ND",
  "Hoornaar",
  "Zuid-Holland",
  "mirjam@kroontrainingadvies.com",
  "0653507815",
];

const Footer: React.FC = () => {
  const theme = useMantineTheme();

  const links = [
    {
      label: "Algemene voorwaarden",
      link: "/algemeen",
    },
    {
      label: "Ethische code",
      link: "/ethischecode",
    },
  ];

  return (
    <Box bg={theme.colors.custom[2]} c="white" p="md">
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
          <Text>2023 Kibbeling Media. All rights reserved.</Text>
        </Group>
      </Container>
    </Box>
  );
};

export default Footer;
