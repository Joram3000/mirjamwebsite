import {
  Box,
  Container,
  Title,
  Text,
  Group,
  Stack,
  Button,
  Image,
} from "@mantine/core";

import Footer from "../../components/footer/footer.tsx";
import KlantErvaring from "../../components/klantErvaring";
import SmallCard from "../../components/smallCard";
import Statement from "../../components/statement";

import Mirjam6 from "../../assets/images/mirjam6.jpg";
import cirkels from "../../assets/images/cirkels.png";
import iconnetje from "../../assets/svg/icoontjes (1).png";

const MirjamKroonHomepage: React.FC = () => {
  const cardContent = [
    {
      icon: iconnetje,
      title: "(Team)coaching",
      text: "‘The system in the room’ onderzoeken. Niet praten over ‘hoe het zou moeten zijn’, maar samen exploreren en het moedige gesprek leren voeren. Samen ontdekken hoe je effectiever wordt.",
      buttonText: "Bekijk coaching",
    },
    {
      icon: iconnetje,
      title: "Training",
      text: "Diverse trainingen die jou of het team helpen impact te vergroten door middel van betere communicatie.",
      buttonText: "Bekijk trainingen",
    },
    {
      icon: iconnetje,
      title: "Systeemspel",
      text: "Hoe stoppen we met het herhalen van patronen en kunnen we leren kijken naar de behoefte en bedoeling die erachter schuilgaat? Het systeemspel is een leuke manier om anders te leren kijken.",
      buttonText: "Bekijk systeemspel ",
    },
  ];

  return (
    <>
      <Box bg="beige">
        <Container>
          <Group w="50%">
            <Stack>
              <Title>Anders kijken naar samenwerkingsvraagstukken</Title>
              <Text>
                Training, coaching en systemische oefeningen voor teams en
                personen, om succesvolle werkrelaties te herstellen of te
                bouwen.
              </Text>
            </Stack>
          </Group>

          <Image src={cirkels} />
        </Container>
      </Box>

      <Statement
        text="To observe the system is to change it"
        subText="Niels Bohr"
        color="blue"
      />

      <Box bg="beige">
        <Container p="xl">
          <Stack align="flex-start">
            <Title w="50%">
              Werken met de spanning tussen verbinding en authenticiteit
            </Title>

            <Group grow>
              <Stack>
                <Text>
                  Is in jouw team van professionals ieder vooral gefocust op
                  zijn eigen werk, zonder dat ze elkaar sterker maken? Vormt de
                  directie geen eenheid? Blijven leidinggevenden moeilijke
                  gesprekken uitstellen? Lukt het samenwerken met een nieuwe
                  collega niet, omdat deze alles zelf probeert op te lossen? Of
                  vind je het zelf moeilijk om hulp te vragen aan collega’s?
                </Text>
                <Text>
                  Als mens leren we onszelf kennen door in verbinding te zijn
                  met anderen. We hebben een spiegel nodig. Om onze eigen
                  krachten te ontdekken, én om die in te zetten in samenwerking.
                  Maar hoe zorg je ervoor dat deze beide kanten voldoende
                  zichtbaar zijn?
                </Text>
                <Text>
                  Door gesprekken en oefeningen ontdekken we wat er tussen
                  elkaar gebeurt. Ik houd van het begrip “moedige gesprekken”
                  moedig is in het Frans ‘Courage’ en heeft zijn oorsprong in
                  ‘coeur’, hart of moed. We hebben niet alleen ons hoofd maar
                  ook ons hart nodig, moed om de echte gesprekken te voeren, die
                  gevoerd moeten worden.
                </Text>
              </Stack>

              <Image src={Mirjam6} />
            </Group>
            <Button variant="outline">Meer over Mirjam</Button>
          </Stack>
        </Container>
      </Box>

      <Box bg="white">
        <Container p="xl">
          <Stack align="center">
            <Title>Waarvoor kun je bij mij terecht?</Title>
            <Text ta="center">
              Waar mensen samenwerken, valt veel te winnen... wanneer er goed
              gecommuniceerd wordt. Of dat nu in de financiële branche is, de
              overheid of de zware maakindustrie. Afstemmen, programma’s op maat
              maken in taal die aansluit, is kenmerkend voor mijn werkwijze.
            </Text>

            <Group w="100%" align="flex-start" grow>
              {cardContent.map((card) => (
                <SmallCard card={card} />
              ))}
            </Group>
          </Stack>
        </Container>
      </Box>

      <Box bg="beige">
        <Container p="xl">
          <Title>Klant Ervaringen</Title>
          <Group grow>
            <KlantErvaring />
            <KlantErvaring />
          </Group>
        </Container>
      </Box>

      <Footer />
    </>
  );
};

export default MirjamKroonHomepage;
