import {
  Box,
  Container,
  Group,
  Title,
  useMantineTheme,
  Image,
  Stack,
  Text,
  Divider,
} from "@mantine/core";
import Mirjam6 from "../../assets/images/mirjam6.jpg";
import Kaartje from "../../assets/images/kaartje.png";

const MirjamKroonContact: React.FC = () => {
  const theme = useMantineTheme();

  return (
    <Box c={theme.colors.custom[3]} p="xl">
      <Container>
        <Title order={1} ta="center">
          Contact
        </Title>
        <Group grow>
          <Image src={Mirjam6} />
          <Stack>
            <Text>
              Benieuwd naar wat ik voor jouw organisatie kan betekenen? Neem
              gerust vrijblijvend contact op om te kijken wat mogelijk is.
            </Text>
            <Text>
              Mirjam Kroon-Hoekendijk Dorpsweg 71 4223 ND Hoornaar Zuid-Holland
              mirjam@kroontrainingadvies.com 0653507815
            </Text>
          </Stack>
        </Group>
        <Divider my="xl" />
        <Group grow>
          <Text>
            Moeite met het vinden van het adres? Zoek hier de route op via
            Google Maps!
          </Text>
          <Image src={Kaartje} />
        </Group>
      </Container>
    </Box>
  );
};

export default MirjamKroonContact;
