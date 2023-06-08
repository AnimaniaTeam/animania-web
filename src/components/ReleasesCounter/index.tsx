import { Box, Flex, Heading, Text } from "@chakra-ui/react";

interface ReleasesCounterProps {
  count: number;
  title: string;
  isActive?: boolean;
}

export function ReleasesCounter({
  count,
  title,
  isActive = false,
}: ReleasesCounterProps) {
  return (
    <Box
      bg={isActive ? "#EF6C00" : "#F6AD55"}
      border="1px"
      borderColor="#9C4221"
      borderRadius="md"
      color="#000000"
      cursor="pointer"
      maxW="7.5rem"
      px={10}
      _hover={{ bg: "#DD6B20" }}
      _first={{ mr: "5rem" }}
    >
      <Flex direction="column" justifyContent="center" alignItems="center">
        <Heading fontSize="2.5rem">{count}</Heading>
        <Text fontSize="1.25rem">{title}</Text>
      </Flex>
    </Box>
  );
}

