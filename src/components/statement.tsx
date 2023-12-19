import { Box, Stack, Text, Title } from "@mantine/core";

interface StatementProps {
  text: string;
  subText: string;
  color?: string;
}

const Statement: React.FC<StatementProps> = ({ text, subText, color }) => {
  return (
    <Box p="xl" bg={color ?? "orange"}>
      <Stack align="center">
        <Title>{text}</Title>
        <Text>{subText}</Text>
      </Stack>
    </Box>
  );
};

export default Statement;
