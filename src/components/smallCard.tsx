import { Button, Stack, Text, Title, Image } from "@mantine/core";

type card = {
  icon: string;
  title: string;
  text: string;
  buttonText: string;
  link: string;
};

interface smallCardProps {
  card: card;
}

const SmallCard: React.FC<smallCardProps> = ({ card }) => {
  return (
    <Stack align="center" h="100%" p="md">
      <Image src={card.icon} w={100} h={100} />
      <Title order={2}>{card.title}</Title>

      <Stack h="100%" justify="space-between">
        <Text ta="center">{card.text}</Text>
        <Button component="a" href={card.link}>
          {card.buttonText}
        </Button>
      </Stack>
    </Stack>
  );
};

export default SmallCard;
