import { Box, Heading, Text, Stack } from "@chakra-ui/react";

interface FeatureProps {
  title: string;
  desc: string;
}

function Feature({ title, desc, ...rest }: FeatureProps) {
  return (
    <Box p={5} shadow="md" borderWidth="1px" {...rest}>
      <Heading fontSize="xl">{title}</Heading>
      <Text mt={4}>{desc}</Text>
    </Box>
  );
}

export function StackEx() {
  return (
    <Stack spacing={8} direction="row">
      <Feature
        title="Plan Money"
        desc="The future can be even brighter but a goal without a plan is just a wish"
      />
      <Feature
        title="Save Money"
        desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process"
      />
    </Stack>
  );
}
