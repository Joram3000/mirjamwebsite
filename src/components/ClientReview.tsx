import { Stack, Text } from "@mantine/core";

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
        justify="center"
        style={{ borderLeft: "1px dotted green" }}
        pl="md"
      >
        <Text>{name}</Text>
        {company && <Text>{company}</Text>}
      </Stack>
    </Stack>
  );
};

export default ClientReview;
