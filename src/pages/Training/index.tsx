import {
  Box,
  Container,
  Stack,
  Title,
  useMantineTheme,
  Text,
  Button,
} from "@mantine/core";

const MirjamKroonTraining: React.FC = () => {
  const theme = useMantineTheme();
  return (
    <>
      <Box bg={theme.colors.custom[1]}>
        <Container p="xl">
          <Title>Trainingen</Title>
          <Text>Foto</Text>
          <Title>Wegen ontstaan, waar mensen samen gaan</Title>
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
          <Text>
            <ul>
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
            </ul>
          </Text>
          <Button>Vraag vrijblijvend naar de mogelijkheden</Button>
          <Title>Reviews</Title>

          <Stack justify="space-between">
            <Text>
              Niets dan lof! Wat een kundige en fijne vrouw! Rustige en niet
              oordelende persoon, komt prettig over. Mirjam heeft mij eerst
              vakkundig uit mijn comfortzone gehaald en mij, voor mijn gevoel
              iig, daarna onder zorgvuldige begeleiding gebracht waar ik nu sta.
            </Text>

            <Stack style={{ borderLeft: "1px dotted green" }}>
              <Text>Deelnemer training</Text>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default MirjamKroonTraining;
