import { Button as ChakraButton } from "@chakra-ui/react";

interface ButtonProps {
  children: React.ReactNode;
}

export function Button({ children }: ButtonProps) {
  return (
    <ChakraButton
      h="3.75rem"
      colorScheme="blue"
      px={6}
      border="1px"
      borderColor="#3182CE"
      bg="#63B3ED"
      shadow="md"
    >
      {children}
    </ChakraButton>
  );
}

