import {
  Box,
  Container,
  Title,
  useMantineTheme,
  Text,
  Button,
  Image,
  Flex,
  Stack,
} from "@mantine/core";
import plaatje from "../../assets/images/IMG_4552.jpg";
import ClientReview from "../../components/ClientReview";

const MirjamKroonTraining: React.FC = () => {
  const theme = useMantineTheme();
  return (
    <>
      <Box py="md" c={theme.colors.custom[1]} bg={theme.colors.custom[0]}>
        <Title my="md" ta="center" order={1}>
          Trainingen
        </Title>
        <Image src={plaatje} w="100%" h="50vh" />

        <Container p="md">
          <Title pb="md" order={2}>
            Wegen ontstaan,
            <br />
            waar mensen samen gaan
          </Title>
          <Text pb="md">
            Het gaat bij trainingen steeds weer om het vergroten van impact door
            middel van communicatie.
            <br />
            De kracht van de stilte leren gebruiken, want we kletsen zo vaak
            door het waardevolle denkproces van de ander heen.
            <br />
            <br />
            Vaardigheden als de bal bij de ander leggen, zorgen dat mensen in
            beweging komen, zijn mooie trainingsonderwerpen. Ik zie een
            trainingscontext als een klein laboratorium, waarbij je inzoomt op
            een vaardigheid die je wilt vergroten, aanleren of verbeteren.
            <br />
            <br />
            Wanneer de koppeling aan de praktijk meegenomen wordt in het
            programma, kan een training een zinvolle manier van leren zijn. Het
            werkt resultaatverhogend wanneer een trainingsdag onderdeel is van
            een grotere beweging die ingezet wordt of bijvoorbeeld opgevolgd
            wordt door intervisie.
            <br /> <br />
            Trainingen zijn altijd maatwerk, afhankelijk van de vraag van de
            opdrachtgever.
          </Text>
          <Flex gap="md" direction={{ base: "column", md: "row" }}>
            <Image hiddenFrom="md" src={plaatje} />
            <Stack>
              <Text>De meest recente trainingen:</Text>
              <ul>
                <li>
                  <Text>
                    Leidinggeven met Lef (het moedige gesprek voeren).{" "}
                  </Text>
                </li>
                <li>
                  <Text>De Leider als teamcoach of individuele coach. </Text>
                </li>
                <li>
                  <Text>
                    Ik ben als een van de vaste trainers betrokken bij het
                    programma De Informele Leider van de Baak. Een programma
                    waarbij je leert hoe je mensen mee kunt krijgen zonder
                    informele macht.
                  </Text>
                </li>
                <li>
                  <Text>
                    Insights-teamtrainingen, gebruiksaanwijzingen om elkaar te
                    begrijpen
                  </Text>
                </li>
                <li>
                  <Text>Feedback-trainingen </Text>
                </li>
              </ul>

              <Button onClick={() => console.log("Hoi ik ben geklikt")}>
                Vraag vrijblijvend naar de mogelijkheden
              </Button>
            </Stack>

            <Image visibleFrom="md" src={plaatje} w="40%" />
          </Flex>
        </Container>
      </Box>

      <Box bg="white" c={theme.colors.custom[1]}>
        <Container>
          <Title py="xl" order={1}>
            Reviews
          </Title>
          <ClientReview
            review="Niets dan lof! Wat een kundige en fijne vrouw! Rustige en niet
              oordelende persoon, komt prettig over. Mirjam heeft mij eerst
              vakkundig uit mijn comfortzone gehaald en mij, voor mijn gevoel
              iig, daarna onder zorgvuldige begeleiding gebracht waar ik nu sta."
            name="Deelnemer teamcoaching"
          />
        </Container>
      </Box>
    </>
  );
};

export default MirjamKroonTraining;
