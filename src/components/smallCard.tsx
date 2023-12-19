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
    <Stack align="center">
      <Image src={card.icon} w={100} h={100} />
      <Title>{card.title}</Title>
      <Text ta="center">{card.text}</Text>
      <Button>{card.buttonText}</Button>
    </Stack>
  );
};

export default SmallCard;
