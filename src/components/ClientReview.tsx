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
    <Stack bg="indigo" h="100%">
      <Text>{review}</Text>

      <Stack justify="center" bg="dark">
        <Text>{name}</Text>
        {company && <Text>{company}</Text>}
      </Stack>
    </Stack>
  );
};

export default ClientReview;
