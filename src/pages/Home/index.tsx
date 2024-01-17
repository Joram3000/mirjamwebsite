import {
  Box,
  Container,
  Title,
  Text,
  Stack,
  Button,
  Image,
  SimpleGrid,
  useMantineTheme,
  Flex,
} from "@mantine/core";

import SmallCard from "../../components/smallCard";
import Statement from "../../components/StatementBar";
import Mirjam6 from "../../assets/images/mirjam6.webp";
import cirkels from "../../assets/images/cirkels.webp";

import systeemspel from "../../assets/svg/systeemspel.png";
import teamcoaching from "../../assets/svg/teamcoaching.png";
import training from "../../assets/svg/training.png";

import ClientReview from "../../components/ClientReview";
import { Link } from "react-router-dom";

const MirjamKroonHomepage: React.FC = () => {
  const theme = useMantineTheme();
  const cardContent = [
    {
      icon: teamcoaching,
      title: "(Team)coaching",
      text: "‘The system in the room’ onderzoeken. Niet praten over ‘hoe het zou moeten zijn’, maar samen exploreren en het moedige gesprek leren voeren. Samen ontdekken hoe je effectiever wordt.",
      buttonText: "Bekijk coaching",
      link: "/coaching",
    },
    {
      icon: training,
      title: "Training",
      text: "Diverse trainingen die jou of het team helpen impact te vergroten door middel van betere communicatie.",
      buttonText: "Bekijk trainingen",
      link: "/training",
    },
    {
      icon: systeemspel,
      title: "Systeemspel",
      text: "Hoe stoppen we met het herhalen van patronen en kunnen we leren kijken naar de behoefte en bedoeling die erachter schuilgaat? Het systeemspel is een leuke manier om anders te leren kijken.",
      buttonText: "Bekijk systeemspel ",
      link: "/systeemspel",
    },
  ];

  return (
    <>
      <Box bg={theme.colors.custom[0]} c={theme.colors.custom[2]} pt="md">
        <Container>
          <Stack pb="md">
            <Title visibleFrom="md" order={1}>
              Anders kijken naar
              <br />
              samenwerkingsvraagstukken
            </Title>
            <Title hiddenFrom="md" order={2}>
              Anders kijken naar samenwerkingsvraagstukken
            </Title>

            <Text w={{ base: "100%", md: "70%" }}>
              Training, coaching en systemische oefeningen voor teams en
              personen, om succesvolle werkrelaties te herstellen of te bouwen.
            </Text>
          </Stack>

          <Image src={cirkels} pb="md" />
        </Container>

        <Statement
          text="To observe the system is to change it"
          subText="Niels Bohr"
        />

        <Container p="md">
          <Stack align="flex-start" c={theme.colors.custom[3]} pt="md">
            <Title order={1} pb="md">
              Werken met de spanning tussen verbinding en authenticiteit
            </Title>

            <Flex direction={{ base: "column", sm: "row" }} align="stretch">
              <Flex direction="column" align="center" justify="space-between">
                <Text pb="md">
                  Is in jouw team van professionals ieder vooral gefocust op
                  zijn eigen werk, zonder dat ze elkaar sterker maken? Vormt de
                  directie geen eenheid? Blijven leidinggevenden moeilijke
                  gesprekken uitstellen? Lukt het samenwerken met een nieuwe
                  collega niet, omdat deze alles zelf probeert op te lossen? Of
                  vind je het zelf moeilijk om hulp te vragen aan collega’s?
                </Text>
                <Text pb="md">
                  Als mens leren we onszelf kennen door in verbinding te zijn
                  met anderen. We hebben een spiegel nodig. Om onze eigen
                  krachten te ontdekken, én om die in te zetten in samenwerking.
                  Maar hoe zorg je ervoor dat deze beide kanten voldoende
                  zichtbaar zijn?
                </Text>
                <Text pb="md">
                  Door gesprekken en oefeningen ontdekken we wat er tussen
                  elkaar gebeurt. Ik houd van het begrip “moedige gesprekken”
                  moedig is in het Frans ‘Courage’ en heeft zijn oorsprong in
                  ‘coeur’, hart of moed. We hebben niet alleen ons hoofd maar
                  ook ons hart nodig, moed om de echte gesprekken te voeren, die
                  gevoerd moeten worden.
                </Text>
              </Flex>
              <Image src={Mirjam6} w={{ base: "100%", sm: "50%" }} />
            </Flex>

            <Link
              style={{
                color: "white",
                textDecoration: "none",
                width: "100%",
              }}
              to="/about"
              // target="_top"
            >
              <Button visibleFrom="md">Meer over Mirjam</Button>
              <Button hiddenFrom="md" fullWidth>
                Meer over Mirjam
              </Button>
            </Link>
          </Stack>
        </Container>
      </Box>

      <Box bg="white" c={theme.colors.custom[2]} pt="md">
        <Container p="md">
          <Stack align="center">
            <Title order={1}>Waarvoor kun je bij mij terecht?</Title>
            <Text ta="center">
              Waar mensen samenwerken, valt veel te winnen wanneer er goed
              gecommuniceerd wordt. Of dat nu in de financiële branche is, de
              overheid of de zware maakindustrie. Afstemmen, programma’s op maat
              maken in taal die aansluit, is kenmerkend voor mijn werkwijze.
            </Text>

            <SimpleGrid cols={{ base: 1, sm: 3 }}>
              {cardContent.map((card) => (
                <SmallCard key={card.title} card={card} />
              ))}
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>

      <Box c={theme.colors.custom[1]} bg={theme.colors.custom[0]}>
        <Container p="md">
          <Title pb="md">Reviews</Title>

          <SimpleGrid cols={{ base: 1, sm: 2 }}>
            <ClientReview
              review="Mooie kennismaking met het team en met het leren kijken vanuit
                systemisch perspectief. Met een inzichtgevende opstelling als
                mooi eindresultaat. Mirjam kan een mooie introductie geven met
                simpele oefeningen zodat iedereen, met kennis of niet, kan
                deelnemen."
              name="Deelnemer teamcoaching"
            />
            <ClientReview
              review="Met haar 1 op 1 training heeft Mirjam mij de enorme potentiële waarde laten inzien van o.a. anders (geweldloos) communiceren en hoe ik dit in mijn persoonlijke én professionele omgeving op de juiste manier kan inzetten. Er ging een (nieuwe) wereld van mogelijkheden voor mij open. Dit was een van de beste investeringen in mijn persoonlijke en professionele ontwikkeling van de afgelopen periode."
              name="John Lankester"
              company="RWS"
            />
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
};

export default MirjamKroonHomepage;
