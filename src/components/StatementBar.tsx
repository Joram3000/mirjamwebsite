import { Box, Stack, Text, Title } from "@mantine/core";

interface StatementBarProps {
  text: string;
  subText: string;
  color?: string;
}

const StatementBar: React.FC<StatementBarProps> = ({
  text,
  subText,
  color,
}) => {
  return (
    <Box p="xl" bg={color ?? "orange"}>
      <Stack align="center">
        <Title>{text}</Title>
        <Text>{subText}</Text>
      </Stack>
    </Box>
  );
};

export default StatementBar;
