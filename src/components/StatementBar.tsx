import { Box, Stack, Text, Title, useMantineTheme } from "@mantine/core";

interface StatementBarProps {
  text: string;
  subText: string;
}

const StatementBar: React.FC<StatementBarProps> = ({ text, subText }) => {
  const theme = useMantineTheme();
  return (
    <Box p="xl" bg={theme.colors.custom[2]} c={theme.colors.custom[6]}>
      <Stack align="center">
        <Title size={40}>{text}</Title>
        <Text>{subText}</Text>
      </Stack>
    </Box>
  );
};

export default StatementBar;
