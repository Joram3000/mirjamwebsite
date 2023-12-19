import { Group, Stack, Text, Title, Image } from "@mantine/core";

type samenwerkingsPartner = {
  img?: string;
  name: string;
  text: string;
  link?: string;
};

interface PeopleCardProps {
  samenwerkingsPartner: samenwerkingsPartner;
  size?: number;
}

const PeopleCard: React.FC<PeopleCardProps> = ({
  samenwerkingsPartner,
  size = 150,
}) => {
  return (
    <Group>
      <Image h={size} w={size} src={samenwerkingsPartner.img} />
      <Stack w="70%">
        <Title order={3}>{samenwerkingsPartner.name}</Title>
        <Text>{samenwerkingsPartner.text}</Text>
      </Stack>
    </Group>
  );
};

export default PeopleCard;
