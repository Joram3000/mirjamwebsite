import { Box, Stack, Text, Title, useMantineTheme } from "@mantine/core";
import { isMobile } from "react-device-detect";

interface StatementBarProps {
  text: string;
  subText: string;
}

const StatementBar: React.FC<StatementBarProps> = ({ text, subText }) => {
  const theme = useMantineTheme();
  return (
    <Box
      p={isMobile ? "md" : "xl"}
      bg={theme.colors.custom[2]}
      c="white"
      ta="center"
    >
      <Stack align="center">
        <Title size={isMobile ? "xx-large" : "xxx-large"}>{text}</Title>
        <Text size="xl">{subText}</Text>
      </Stack>
    </Box>
  );
};

export default StatementBar;

// py={{ base: 'xs', sm: 'md', lg: 'xl' }}
