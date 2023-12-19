import {
  Box,
  Container,
  Title,
  Text,
  Group,
  Stack,
  Image,
  Button,
  SimpleGrid,
} from "@mantine/core";
import Footer from "../../components/footer/footer.tsx";
import Statement from "../../components/statement";

import Mirjam6 from "../../assets/images/mirjam6.jpg";
import Tree from "../../assets/images/Tree.jpg";
import IMG_4864 from "../../assets/images/IMG_4864.jpg";
import BesidesWork from "../../assets/images/besidesWork.jpg";

const MirjamKroonCoaching: React.FC = () => {
  return (
    <>
      <Box bg="beige">
        <Container p="xl">
          <Stack align="center">
            <Title>Coaching</Title>
            <Title h={3}>Persoonlijke coaching & teamcoaching</Title>
          </Stack>
        </Container>
      </Box>

      <Box bg="beige">
        <Container p="xl">
          <Group grow align="flex-start">
            <Image src={IMG_4864} />
            <Stack>
              <Title>En naast werk?</Title>
              <Text pb="lg">
                Obstakels op je weg, herhalende patronen in de interactie met
                anderen? Gedrag veranderen is niet eenvoudig.
              </Text>
              <Text pb="lg">
                Wanneer er maatwerk nodig is, loop ik graag een tijdje mee. In
                mijn rol als coach zie ik mezelf als klankbord, uitdager,
                spiegel en kennisbron.
              </Text>
            </Stack>
          </Group>
        </Container>
      </Box>

      <Statement
        text="“Kleine veranderingen kunnen groots effect hebben”"
        subText="Joep Choy"
        color="blue"
      />
      <Statement text="" subText="" color="darkBlue" />

      <Box bg="beige">
        <Container p="xl">
          <Title>Teamcoaching</Title>
          <Title>"The system in the room"</Title>
          <Text>
            Het lijkt wel alsof we na de coronatijd met nieuwe teamvragen en
            leiderschap-issues te maken hebben gekregen. Leidinggeven op
            afstand, hoe houden we cohesie? Wat verwachten we wel en niet van
            elkaar? Vragen die er altijd al waren, maar nu nog meer om
            duidelijke communicatie vragen. Hoe houd je verbinding, wat zijn de
            verschillende behoeften binnen het team. Hoe ga je om met teamleden
            die graag op de voor- en anderen die makkelijk op de achtergrond
            blijven? Hoe zorg je ervoor dat je als teamleider niet steeds zèlf
            hard blijft werken, maar dat het team gaat groeien in
            verantwoordelijkheid nemen..
          </Text>
          <Text>
            Bij teamcoaching gaat het echt om “the system in the room”. Niet
            praten over “hoe het zou moeten zijn”, maar samen exploreren en het
            moedige gesprek leren voeren. Samen ontdekken hoe je effectiever
            wordt. Hoe je onuitgesproken zaken die onder de tafel verdwijnen
            maar wel invloed hebben, boven de tafel leert bespreken.
          </Text>
          <Text>
            Teamcoaching wordt vaak ingezet als er gedoe is, maar het kan ook
            zinvol zijn om eens te kijken hoe jullie als team de dingen doen en
            wat daar beter in kan.
          </Text>
          <Text>
            Mijn aanpak is een systemische, dat wil zeggen dat ik jullie help
            kijken naar wat er tussen mensen gebeurt. Onze eerste manier van
            kijken is vaak lineair met als vraag: wie is waar de oorzaak van?
            Maar de realiteit is meestal complexer, in groepen en tussen mensen
            verloopt de interactie circulair. We haken voortdurend op elkaar in.
            Dat ontwarren wanneer er spanning is, helpt om de spanning te
            verlagen. Deze werkwijze heeft als doel op individueel niveau te
            ontschuldigen en meer te kijken naar het effect van gedrag en hoe we
            elkaar soms vast kunnen zetten.
          </Text>
        </Container>
      </Box>

      <Box bg="darkGreen">
        <Container p="xl">
          <Title>
            Voor persoonlijke coaching begeleid ik je graag op thema’s als:
          </Title>
          <Text>
            Met meer ontspanning en zelfvertrouwen je plek innemen Effectiever
            communiceren Helder krijgen waar je eigen hart sneller van gaat
            kloppen Verlies verwerken
          </Text>
          <Text>
            Voorwaarde om een coachtraject te laten werken is een eigen
            leervraag. Waar zit de spanning tussen waar je nu bent en waar je
            heen wilt? En daar kunnen veel soorten vragen onder vallen.
          </Text>
        </Container>
      </Box>

      <Box bg="beige">
        <Container p="xl">
          <Title>Hoe zou een persoonlijk coachtraject eruit kunnen zien?</Title>

          <Text>
            Een eerste gesprek is een gesprek waarbij we wederzijds kijken of er
            voldoende klik is en onderzoeken we samen de coachingsvraag. Een
            traject beslaat meestal 5 tot 7 sessies, soms meer. Tussen de
            sessies ga je verder met je eigen leerproces aan de hand van
            experimenten die je gaat uittesten in de praktijk.
          </Text>

          <Button>Vraag vrijblijvend naar de mogelijkheden</Button>
        </Container>
      </Box>

      <Box>
        <Title pb="xl" ta="center" bg="beige">
          Tools die kunnen worden ingezet:
        </Title>
        <Container p="xl">
          <Group grow>
            <Stack>
              <Title>Insights Discovery®</Title>
              <Text>
                Een van de instrumenten die kunnen helpen bij het elkaar beter
                begrijpen, is Insights Discovery®. Insights bestaat uit een
                vragenlijst waar een persoonlijkheidsprofiel uit komt rollen,
                die gekoppeld wordt aan kleuren. De kleurentaal is gebaseerd op
                het gedachtegoed van Carl Gustav Jung. De Zwitserse psycholoog
                en psychiater introduceerde het concept van psychologische
                voorkeuren. Insights koppelt die voorkeuren aan 4 kleuren. Ze
                geven je op een aansprekende manier inzicht in je eigen reacties
                en gedrag en helpen je om te begrijpen waarom andere mensen heel
                ander gedrag laten zien Hoe veelzeggend iemands eerste kleur ook
                is, ook iemands tweede, derde en laagste kleur kunnen enorm
                bepalend zijn voor zijn gedrag. Iedereen gebruikt alle 4 de
                Insights Kleuren, maar de specifieke volgorde en intensiteit van
                de kleuren verschilt per persoon: we hebben allemaal onze eigen
                unieke kleurenmix. Naast een individueel profiel kan er ook een
                teamprofiel worden gegenereerd waardoor er een overzicht bestaat
                van welke kleuren veel en welke minder aanwezig zijn in het
                team. Op grond daarvan kan er inzicht ontstaan in sterkten en
                zwaktes van het team.
              </Text>
            </Stack>
            <Stack bg="darkGreen">
              <Title>Myers-Briggs Type-indicator</Title>
              <Text>
                Ook de Myers-Briggs Type-indicator (step 2) is net zoals de
                Insights Discovery® gebaseerd op het gedachtegoed van Gustav
                Jung, waarbij verschillen tussen mensen in kaart worden
                gebracht. Zoals Intra-en extravert, taak-versus mensgericht,
                gestructureerd of meer go-with-the-flow. De profielteksten zijn
                toegankelijk en helpen met name om je eigen gebruiksaanwijzing
                en die van je teamgenoten beter te begrijpen. Wanneer meer
                begrip voor elkaar en leren omgaan met verschillen een vraag is,
                kan dit instrument een leuke en speelse start zijn van een
                teamtraject. De keerzijde kan zijn dat mensen gereduceerd worden
                tot een kleur en elkaar in een hokje gaan stoppen, maar de wijze
                waarop dit geïntroduceerd wordt, maakt in dit opzicht hét
                verschil.
              </Text>
            </Stack>
          </Group>
        </Container>
      </Box>

      <Box bg="beige">
        <Container p="xl">
          <Title pb="xl">Klant Ervaringen</Title>

          <SimpleGrid cols={{ base: 1, sm: 2 }}>
            <Stack justify="space-between">
              <Text>
                "Mooie kennismaking met het team en met het leren kijken vanuit
                systemisch perspectief. Met een inzichtgevende opstelling als
                mooi eindresultaat. Mirjam kan een mooie introductie geven met
                simpele oefeningen zodat iedereen, met kennis of niet, kan
                deelnemen."
              </Text>
              <Stack style={{ borderLeft: "1px dotted green" }}>
                <Text>"Deelnemer teamcoaching"</Text>
                <Text>""</Text>
              </Stack>
            </Stack>

            <Stack h="100%" justify="space-between">
              <Text>
                “Met haar 1 op 1 training heeft Mirjam mij de enorme potentiële
                waarde laten inzien van o.a. anders (geweldloos) communiceren en
                hoe ik dit in mijn persoonlijke én professionele omgeving op de
                juiste manier kan inzetten. Er ging een (nieuwe) wereld van
                mogelijkheden voor mij open. Dit was een van de beste
                investeringen in mijn persoonlijke en professionele ontwikkeling
                van de afgelopen periode.”
              </Text>

              <Stack style={{ borderLeft: "1px dotted green" }}>
                <Text>"John Lankester"</Text>
                <Text>"RWS"</Text>
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>

      <Footer />
    </>
  );
};

export default MirjamKroonCoaching;
