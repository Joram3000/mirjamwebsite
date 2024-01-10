import {
  Box,
  Container,
  Title,
  useMantineTheme,
  Text,
  Button,
  Image,
} from "@mantine/core";
import plaatje from "../../assets/images/IMG_4552.jpg";
import ClientReview from "../../components/ClientReview";

const MirjamKroonTraining: React.FC = () => {
  const theme = useMantineTheme();
  return (
    <>
      <Box c={theme.colors.custom[1]}>
        <Title my="md" ta="center" order={1}>
          Trainingen
        </Title>
        <Image src={plaatje} w="100%" h="50vh" />

        <Container p="md">
          <Title pb="md" order={2}>
            Wegen ontstaan, waar mensen samen gaan
          </Title>
          <Text>
            Het gaat bij trainingen steeds weer om het vergroten van impact door
            middel van communicatie. De kracht van de stilte leren gebruiken,
            want we kletsen zo vaak door het waardevolle denkproces van de ander
            heen.
          </Text>
          <Text>
            Vaardigheden als de bal bij de ander leggen, zorgen dat mensen in
            beweging komen, zijn mooie trainingsonderwerpen. Ik zie een
            trainingscontext als een klein laboratorium, waarbij je inzoomt op
            een vaardigheid die je wilt vergroten, aanleren of verbeteren.
          </Text>
          <Text>
            Wanneer de koppeling aan de praktijk meegenomen wordt in het
            programma, kan een training een zinvolle manier van leren zijn. Het
            werkt resultaatverhogend wanneer een trainingsdag onderdeel is van
            een grotere beweging die ingezet wordt of bijvoorbeeld opgevolgd
            wordt door intervisie.
          </Text>
          <Text>
            Trainingen zijn altijd maatwerk, afhankelijk van de vraag van de
            opdrachtgever.
          </Text>
          <Text>De meest recente trainingen</Text>

          <ol>
            <li>Leidinggeven met Lef (het moedige gesprek voeren).</li>
            <li>De Leider als teamcoach of individuele coach.</li>
            <li>
              Ik ben als een van de vaste trainers betrokken bij het programma
              De Informele Leider van de Baak. Een programma waarbij je leert
              hoe je mensen mee kunt krijgen zonder informele macht.
            </li>
            <li>
              Insights-teamtrainingen, gebruiksaanwijzingen om elkaar te
              begrijpen
            </li>
            <li>Feedback-trainingen</li>
          </ol>

          <Button onClick={() => console.log("Hoi ik ben geklikt")}>
            Vraag vrijblijvend naar de mogelijkheden
          </Button>
        </Container>
      </Box>

      <Box bg="white" c={theme.colors.custom[1]} m="xl">
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
