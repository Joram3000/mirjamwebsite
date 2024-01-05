import {
  Box,
  Container,
  Title,
  Text,
  Group,
  Stack,
  Image,
  Button,
  useMantineTheme,
} from "@mantine/core";
import fotowater from "../../assets/images/fotowater.png";
import IMG_3543 from "../../assets/images/IMG_3543.jpg";
import ClientReview from "../../components/ClientReview";

const MirjamKroonSysteemspel: React.FC = () => {
  const theme = useMantineTheme();
  return (
    <>
      <Box bg={theme.colors.custom[0]} c={theme.colors.custom[1]}>
        <Title order={1} ta="center">
          Systeemspel
        </Title>
        <Image src={fotowater} />
        <Container p="xl">
          <Text>
            Bij het spelen van het systeemspel ga je aan de hand van een
            verhaal, in de vorm van een film, leren om met een systeembril te
            kijken naar samenwerkingsvraagstukken. En krijg je manieren
            aangereikt om de vastgelopen situatie weer vlot te trekken.
          </Text>

          <Group grow align="space-around" my="md">
            <Stack>
              <Text>
                Om je eigen deskundigheid te bevorderen vanuit bijvoorbeeld een
                rol als HR-manager of trainer, kun je mij inhuren om het spel
                samen te spelen.
              </Text>
              <Text>
                Het spel waarbinnen je je eigen kennis ontwikkelt over
                systemisch kijken duurt een dag. Met eigen casussen de geleerde
                kennis toepassen geeft een meerwaarde.
              </Text>
            </Stack>
            <Stack>
              <Text>
                Omdat ik vanuit meerdere systemische achtergronden opgeleid ben
                (Hellingerwerk, Marijke Spansjersbergen), breng ik een rijk
                gevulde gereedschapskist mee. De wereld wordt er niet
                eenvoudiger maar wel veel rijker van als we doorkrijgen hoeveel
                samenhang er is tussen goede doelen stellen en goede relaties
                ontwikkelen. Hoe patronen zich vaak herhalen en ook te
                veranderen zijn.
              </Text>
            </Stack>
          </Group>
        </Container>
      </Box>

      <Box bg={theme.colors.custom[3]} c="white">
        <Container p="xl">
          <Group grow align="flex-start" h="100%">
            <Stack>
              <Title py="xl" order={1}>
                Anders leren kijken
              </Title>
              <Text pb="lg">
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
              <Text pb="lg">
                Volgens de systeembenadering is het antwoord op de vraag: ‘Wat
                gaat helpen in het systeem zelf’ te vinden. Elk gedrag is
                logisch, hoe stoppen we met het blijven herhalen van patronen en
                kunnen we leren kijken naar de behoefte en bedoeling die
                erachter schuilgaat? Weg van oorzaak gevolg denken, op zoek naar
                het ontschuldigen van die patronen omdat ze zo logisch zijn.
              </Text>
              <Text pb="lg">
                "It's not personal, it's the system” Taal ontwikkelen, woorden
                vinden voor wat zich afspeelt tussen mensen, dat is het
                gereedschap voor een systeemdenker. Het systeemspel is een leuke
                manier om basiskennis op te doen om anders te leren kijken. Heb
                je interesse om hier meer over te leren en ontdekken? Ik vertel
                je er graag meer over.
              </Text>

              <Button my="xl">Vraag vrijblijvend naar de mogelijkheden</Button>
            </Stack>

            <Image src={IMG_3543} />
          </Group>
        </Container>

        <Box c={theme.colors.custom[1]} bg={theme.colors.custom[0]} py="xl">
          <Container>
            <Title order={1} ta="center" py="xl">
              Review
            </Title>

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
      </Box>
    </>
  );
};

export default MirjamKroonSysteemspel;
