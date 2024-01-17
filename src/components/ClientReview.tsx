import { Stack, Text, rem } from "@mantine/core";

interface ClientReviewProps {
  review: string;
  name: string;
  company?: string;
}

const ClientReview: React.FC<ClientReviewProps> = ({
  review,
  name,
  company,
}) => {
  return (
    <Stack h="100%" justify="space-between">
      <Text fs="italic">"{review}"</Text>

      <Stack
        justify="space-evenly"
        style={{ borderLeft: "1px dotted green" }}
        my="md"
        p="md"
        h={rem(60)}
      >
        <Text>{name}</Text>
        {company && <Text>{company}</Text>}
      </Stack>
    </Stack>
  );
};

export default ClientReview;
