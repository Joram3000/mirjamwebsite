import { Stack, Text, Title, Image, Flex } from "@mantine/core";

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
  size = 200,
}) => {
  return (
    <Flex direction={{ base: "column", md: "row" }} align="center" pb="md">
      <Image
        w={{ base: "100%", md: size }}
        p="md"
        src={samenwerkingsPartner.img}
      />
      <Stack px="md" h="100%">
        <Title ta="left" order={1}>
          {samenwerkingsPartner.name}
        </Title>
        <Text ta="left">{samenwerkingsPartner.text}</Text>
      </Stack>
    </Flex>
  );
};

export default PeopleCard;
