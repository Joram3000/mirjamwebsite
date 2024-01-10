import { Stack, Text, Title, Image, Flex, em } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

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
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);

  return (
    <Flex direction={isMobile ? "column" : "row"} p="md" align="center">
      <Image w={isMobile ? "50%" : size} src={samenwerkingsPartner.img} />
      <Stack p="md">
        <Title ta={isMobile ? "center" : "left"} order={isMobile ? 1 : 2}>
          {samenwerkingsPartner.name}
        </Title>
        <Text ta="left">{samenwerkingsPartner.text}</Text>
      </Stack>
    </Flex>
  );
};

export default PeopleCard;
