import "./style.css";
import mirjamfoto from "../../assets/images/mirjam6.jpg";
import { Anchor, Box, Container, Title, Text } from "@mantine/core";

const UnderConstructionPage = () => {
  return (
    <Box>
      <Container ta="center">
        <Box pt="md">
          <img src={mirjamfoto} className="mirjamFoto" />
          <Title>Kroon Training & Advies</Title>
        </Box>

        <Box ta="center">
          <Title order={2}>ONDER CONSTRUCTIE</Title>
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
            target="_blank"
            href="https://www.linkedin.com/in/mirjam-kroon-hoekendijk-0a99104/"
          >
            <strong>Ga naar LinkedIn</strong>
          </Anchor>
        </Box>

        {/* <div>
          <h2>CONTACTGEGEVENS</h2>
          <p>
            Wil je in contact komen met mij?<br></br>
            Stuur een e-mail naar:
            <strong> mirjam@kroontrainingadvies.com</strong>
            <br></br>
            Of bel: <strong>0653507815</strong>
          </p>
          <p>
            Mirjam Kroon-Hoekendijk<br></br>
            Trainer en (team-)coach Mirjam Kroon Training en Advies<br></br>
            KvK 23083220<br></br>
            BTW NL 00192641B33
          </p>
          <p>
            <strong>Adres:</strong>
            <br></br>
            Dorpsweg 71<br></br>
            4223 ND Hoornaar (ZH)
          </p>
        </div> */}
      </Container>
    </Box>
  );
};

export default UnderConstructionPage;
