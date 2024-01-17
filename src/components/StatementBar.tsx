import { Box, Stack, Text, Title, useMantineTheme } from "@mantine/core";

interface StatementBarProps {
  text: string;
  subText: string;
}

const StatementBar: React.FC<StatementBarProps> = ({ text, subText }) => {
  const theme = useMantineTheme();

  return (
    <Box
      p={{ base: "md", md: "xl" }}
      bg={theme.colors.custom[2]}
      c="white"
      ta="center"
    >
      <Stack>
        <Title>{text}</Title>
        <Text size="xl">{subText}</Text>
      </Stack>
    </Box>
  );
};

export default StatementBar;
