import {
  Box,
  Input as ChakraInput,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

interface InputProps {
  placeholder: string;
}

export function Input({ placeholder }: InputProps) {
  return (
    <Box>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={"O"}
          h="3.75rem"
          color="#616161"
        />
        <ChakraInput
          w="31.875rem"
          h="3.75rem"
          bg="#eeeeee"
          border="1px"
          borderColor="#616161"
          color="#616161"
          placeholder={placeholder}
          _placeholder={{ color: "#616161" }}
          fontFamily="Lato"
        />
      </InputGroup>
    </Box>
  );
}

