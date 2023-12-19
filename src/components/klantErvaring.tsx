import { Stack, Text } from "@mantine/core";

interface KlantErvaringProps {
  text?: string;
  subText?: string;
}

const KlantErvaring: React.FC<KlantErvaringProps> = ({ text, subText }) => {
  return (
    <Stack>
      <Text>
        “Met haar 1 op 1 training heeft Mirjam mij de enorme potentiële waarde
        laten inzien van o.a. anders (geweldloos) communiceren en hoe ik dit in
        mijn persoonlijke én professionele omgeving op de juiste manier kan
        inzetten. Er ging een (nieuwe) wereld van mogelijkheden voor mij open.
        Dit was een van de beste investeringen in mijn persoonlijke en
        professionele ontwikkeling van de afgelopen periode.”
      </Text>

      <Stack justify="center">
        <Text>John Lankester</Text>
        <Text>RWS</Text>
      </Stack>
    </Stack>
  );
};

export default KlantErvaring;
