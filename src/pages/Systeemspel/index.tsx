import {
  Box,
  Container,
  Title,
  Text,
  Group,
  Stack,
  Image,
  useMantineTheme,
} from "@mantine/core";
import IMG_4864 from "../../assets/images/IMG_4864.jpg";

const MirjamKroonSysteemspel: React.FC = () => {
  const theme = useMantineTheme();
  return (
    <>
      <Box bg={theme.colors.custom[1]}>
        <Container p="xl">
          <Stack align="center">
            <Title>Systeemspel</Title>
          </Stack>
        </Container>
      </Box>

      <Box bg="beige">
        <Container p="xl">
          <Group grow align="flex-start">
            <Image src={IMG_4864} />
            <Stack>
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

      <Box bg="darkGreen">
        <Container p="xl">
          <Title>
            Voor persoonlijke coaching begeleid ik je graag op thema’s als:
          </Title>
          <ul>
            <li>
              <Text>
                Met meer ontspanning en zelfvertrouwen je plek innemen
              </Text>
            </li>
            <li>
              <Text>Effectiever communiceren</Text>
            </li>
            <li>
              <Text>
                Helder krijgen waar je eigen hart sneller van gaat kloppen
              </Text>
            </li>
            <li>
              <Text>Verlies verwerken</Text>
            </li>
          </ul>

          <Text>
            Voorwaarde om een coachtraject te laten werken is een eigen
            leervraag.
            <strong>
              Waar zit de spanning tussen waar je nu bent en waar je heen wilt?
            </strong>{" "}
            En daar kunnen veel soorten vragen onder vallen.
          </Text>
        </Container>
      </Box>
    </>
  );
};

export default MirjamKroonSysteemspel;
