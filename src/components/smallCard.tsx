import { Button, Stack, Text, Title, Image } from "@mantine/core";

type card = {
  icon: string;
  title: string;
  text: string;
  buttonText: string;
};

interface smallCardProps {
  card: card;
}

const SmallCard: React.FC<smallCardProps> = ({ card }) => {
  return (
    <Stack align="center" h="100%">
      <Image src={card.icon} w={100} h={100} />
      <Title>{card.title}</Title>

      <Stack h="100%" justify="space-between">
        <Text ta="center">{card.text}</Text>
        <Button>{card.buttonText}</Button>
      </Stack>
    </Stack>
  );
};

export default SmallCard;
