import {
  Box,
  Container,
  Stack,
  Title,
  useMantineTheme,
  Text,
} from "@mantine/core";

const MirjamKroonTraining: React.FC = () => {
  const theme = useMantineTheme();
  return (
    <>
      <Box bg={theme.colors.custom[1]}>
        <Container p="xl">
          <Title>Trainingen</Title>

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
