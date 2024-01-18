import "./style.css";
import mirjamfoto from "../../../public/assets/images/mirjam6.jpg";
import {
  Anchor,
  Box,
  Container,
  Title,
  Text,
  useMantineTheme,
} from "@mantine/core";

const UnderConstructionPage = () => {
  const theme = useMantineTheme();

  return (
    <Box bg={theme.colors.custom[0]} c={theme.colors.custom[1]} p="md">
      <Container ta="center">
        <Box pt="md">
          <Title>Kroon Training & Advies</Title>
          <img src={mirjamfoto} className="mirjamFoto" />
        </Box>

        <Box ta="center">
          <Text>
            Mijn site is onder constructie omdat ik aan een nieuwe site werk.
            <br></br>Maar dat betekent niet dat ik “Under-construction” ben.
          </Text>
          <Text>
            Ik ben volop bezig met het helpen ontwikkelen van mensen door middel
            van trainingen, het verder helpen brengen van
            samenwerkingsvraagstukken en individuele-en teamcoaching.
          </Text>
          <Text>
            Binnenkort is mijn nieuwe website te bezoeken. Nu is er informatie
            te vinden op mijn LinkedIn profiel:
          </Text>
          <Anchor
            c={theme.colors.custom[1]}
            target="_blank"
            href="https://www.linkedin.com/in/mirjam-kroon-hoekendijk-0a99104/"
          >
            <strong>Ga naar LinkedIn</strong>
          </Anchor>
        </Box>
      </Container>
    </Box>
  );
};

export default UnderConstructionPage;
