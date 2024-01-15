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
} from "@mantine/core";
import Mirjam6 from "../../assets/images/mirjam6.jpg";
import Kaartje from "../../assets/images/kaartje.png";

const MirjamKroonContact: React.FC = () => {
  const theme = useMantineTheme();

  return (
    <Box c={theme.colors.custom[3]} bg={theme.colors.custom[0]} py="md">
      <Container>
        <Title order={1} ta="center">
          Contact
        </Title>

        <Flex align="stretch" gap="md">
          <Image visibleFrom="md" w="50%" src={Mirjam6} />

          <Stack justify="flex-start">
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

        <Flex
          direction={{ base: "column", md: "row" }}
          align="stretch"
          gap="md"
          justify="space-between"
        >
          <Text p="md">
            Route Vanaf A27 afslag 25: neem de N214 richting Noordeloos, na 1,4
            km linksaf bij de afslag Hoornaar. Op de T-splitsing rechtsaf, na
            400 m vind je links de Lutjeswaardse Middenweg. Het kantoor is het
            eerste pand aan de rechterzijde. Parkeren voor de deur.
            {/* Moeite met het vinden van het adres?
            <br />
            Zoek hier de route op
            <br />
            via Google Maps! */}
          </Text>
          <Image w={{ base: "100%", md: "50%" }} src={Kaartje} />
        </Flex>
      </Container>
    </Box>
  );
};

export default MirjamKroonContact;
