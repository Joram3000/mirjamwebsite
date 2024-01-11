import {
  Box,
  Container,
  Title,
  useMantineTheme,
  Image,
  Stack,
  Text,
  Divider,
  Flex,
  em,
} from "@mantine/core";
import Mirjam6 from "../../assets/images/mirjam6.jpg";
import Kaartje from "../../assets/images/kaartje.png";
import { useMediaQuery } from "@mantine/hooks";

const MirjamKroonContact: React.FC = () => {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);

  return (
    <Box c={theme.colors.custom[3]} bg={theme.colors.custom[0]} p="xl">
      <Container>
        <Title order={1} ta="center">
          Contact
        </Title>

        <Flex align="stretch" p="md" gap="md">
          <Image visibleFrom="md" w="50%" src={Mirjam6} />

          <Stack justify="flex-start" px="md">
            <Text>
              Benieuwd naar wat ik voor jouw organisatie kan betekenen? Neem
              gerust vrijblijvend contact op om te kijken wat mogelijk is.
            </Text>
            <Text>
              Mirjam Kroon-Hoekendijk
              <br />
              Dorpsweg 71
              <br />
              4223 ND
              <br />
              Hoornaar Zuid-Holland
              <br />
              mirjam@kroontrainingadvies.com
              <br />
              0653507815
            </Text>
          </Stack>
        </Flex>

        <Divider my="xl" />

        <Flex direction={isMobile ? "column" : "row"} align="center" gap="md">
          <Text p="md">
            Moeite met het vinden van het adres?
            <br />
            Zoek hier de route op
            <br />
            via Google Maps!
          </Text>
          <Image w={{ base: "100%", md: "50%" }} src={Kaartje} />
        </Flex>
      </Container>
    </Box>
  );
};

export default MirjamKroonContact;
