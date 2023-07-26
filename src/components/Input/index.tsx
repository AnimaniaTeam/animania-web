import {
  Box,
  Input as ChakraInput,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react'
import { MagnifyingGlass } from '@phosphor-icons/react'

interface InputProps {
  placeholder: string
}

export function Input({ placeholder }: InputProps) {
  return (
    <Box>
      <InputGroup alignItems="center">
        <InputLeftElement pointerEvents="none" color="#616161" h="3.75rem">
          <MagnifyingGlass size={20} />
        </InputLeftElement>
        <ChakraInput
          w="31.875rem"
          h="3.75rem"
          bg="#eeeeee"
          border="1px"
          borderColor="#616161"
          color="#616161"
          placeholder={placeholder}
          _placeholder={{ color: '#616161' }}
        />
      </InputGroup>
    </Box>
  )
}
