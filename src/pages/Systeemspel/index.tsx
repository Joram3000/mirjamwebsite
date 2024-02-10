import {
  Box,
  Container,
  Title,
  Text,
  Group,
  Stack,
  Image,
  useMantineTheme,
  Flex,
  em,
} from "@mantine/core";
import systeemspel from "/assets/images/systeemspel2.webp";
import IMG_35432 from "/assets/images/IMG_35432.webp";
import ClientReview from "../../components/ClientReview";

const MirjamKroonSysteemspel: React.FC = () => {
  const theme = useMantineTheme();

  return (
    <>
      <Box bg={theme.colors.custom[0]} c={theme.colors.custom[1]} py="md">
        <Title order={1} ta="center" my="md">
          Systeemspel
        </Title>
        <Box pos="relative">
        <Title fw={500} size="h1" pos="absolute" bottom="0" right="0" p={{ base: "md", md: "xl" }} c="white">It's not personal,<br/>it's the system</Title>
        <Image w="100%" h={{ base: em(200), sm: em(300), md: em(400) }} fit="cover" src={systeemspel} />
       
        </Box>
        <Container>
          <Group py="md">
            <Text>
              Bij het spelen van het systeemspel ga je aan de hand van een
              verhaal, in de vorm van een film, leren om met een systeembril te
              kijken naar samenwerkingsvraagstukken. En krijg je manieren
              aangereikt om de vastgelopen situatie weer vlot te trekken.
            </Text>

            <Text>
              Om je eigen deskundigheid te bevorderen vanuit bijvoorbeeld een
              rol als HR-manager of trainer, kun je mij inhuren om het spel
              samen te spelen.
            </Text>
          </Group>

          <Group py="md">
            <Text>
              Het spel waarbinnen je je eigen kennis ontwikkelt over systemisch
              kijken duurt een dag. Met eigen casussen de geleerde kennis
              toepassen geeft een meerwaarde.
            </Text>

            <Text>
              Omdat ik vanuit meerdere systemische achtergronden opgeleid ben
              (Hellingerwerk, Marijke Spansjersbergen), breng ik een rijk
              gevulde gereedschapskist mee. De wereld wordt er niet eenvoudiger
              maar wel veel rijker van als we doorkrijgen hoeveel samenhang er
              is tussen goede doelen stellen en goede relaties ontwikkelen. Hoe
              patronen zich vaak herhalen en ook te veranderen zijn.
            </Text>
          </Group>
          <Title c={theme.colors.custom[3]}>Anders leren kijken</Title>
        </Container>
      </Box>

      <Box bg={theme.colors.custom[3]} c="white">
        <Container>
          <Flex
            direction={{ base: "column", md: "row" }}
            gap="md"
            justify="space-evenly"
            align="stretch"
          >
            <Stack flex={1} py="md">
              <Text pb="md">
                We zijn zo gewend om lineair te kijken. "Wie"of "wat" is het
                probleem, en hoe lossen we het op. De realiteit is complexer. De
                systeembenadering helpt ons om die complexiteit recht te doen en
                om op onderzoek uit te gaan aan de hand van een aantal
                kapstokken. We kennen allemaal de "hoe meer de een..... des te
                meer de ander", elkaar versterkende patronen. Hoe meer de grote
                lijnen geschetst worden, hoe meer details er toe doen. Hoe
                harder er een bepaalde mening verkondigd wordt, hoe meer de
                neiging tot dempen ingezet wordt. Zo'n vaart zal het toch ook
                wel niet lopen... en zo kunnen patronen zich blijven herhalen.
              </Text>
              <Image hiddenFrom="lg" src={IMG_35432} />
              <Text pb="md" hiddenFrom="lg" ta="right" size="sm">
                Voorlinden Antony Gormley, Clearing VIII, 2022
              </Text>
              <Text pb="md">
                Volgens de systeembenadering is het antwoord op de vraag: ‘Wat
                gaat helpen in het systeem zelf’ te vinden. Elk gedrag is
                logisch, hoe stoppen we met het blijven herhalen van patronen en
                kunnen we leren kijken naar de behoefte en bedoeling die
                erachter schuilgaat? Weg van oorzaak gevolg denken, op zoek naar
                het ontschuldigen van die patronen omdat ze zo logisch zijn.
              </Text>
              <Text>
                "It's not personal, it's the system” Taal ontwikkelen, woorden
                vinden voor wat zich afspeelt tussen (individuele) mensen, dat
                is het gereedschap voor een systeemdenker. Het systeemspel is
                een leuke manier om basiskennis op te doen om anders te leren
                kijken. Heb je interesse om hier meer over te leren en
                ontdekken? Ik vertel je er graag meer over.
              </Text>
            </Stack>

            <Stack visibleFrom="lg" flex={1} pt="md" justify="center">
              <Image src={IMG_35432} />
              <Text ta="right" m={0} size="sm" pt={em(6)}>
                Voorlinden Antony Gormley, Clearing VIII, 2022
              </Text>
            </Stack>
          </Flex>
        </Container>
      </Box>
      <Box c={theme.colors.custom[1]} bg={theme.colors.custom[0]}>
        <Container p="md">
          <Title pb="md">Review</Title>

          <ClientReview
            review="Mirjam is een fijne trainer. Ze heeft veel kennis en weet het op
                een ontspannen manier over te brengen. Mirjam wil waarde
                toevoegen. Pas als ze denkt dat ze dat kan, besluit ze in te
                stappen. Ze denkt mee, adviseert. Ze zet zichzelf daarbij niet
                op de voorgrond, ze is dienend aan het proces. Mirjam varieert
                in haar werkvormen, prikkelt al in de check-in, zet een
                systemisch spel in en dompel je in verschillende oefeningen.
                Spelenderwijs kom je tot belangrijke gesprekken en essentiële
                inzichten. Hiermee raakt ze hoofd en hart. Want ze leert je
                anders kijken, ze laat je ervaren wat er in de interactie
                gebeurt en wat jouw aandeel daarin is. Ontschuldigend, zoals het
                systemisch betaamt. Waardevol."
            name="Paul Hilhorst"
            company="De Boer & Ritsema van Eck"
          />
        </Container>
      </Box>
    </>
  );
};

export default MirjamKroonSysteemspel;
