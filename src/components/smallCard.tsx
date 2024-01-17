import { Button, Stack, Text, Title, Image } from "@mantine/core";
import { Link } from "react-router-dom";

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

        <Button>
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to={card.link}
          >
            {card.buttonText}
          </Link>
        </Button>
      </Stack>
    </Stack>
  );
};

export default SmallCard;
