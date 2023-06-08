import { Box } from '@chakra-ui/react'

export function Divider() {
  return (
    <Box
      as="hr"
      w="100%"
      h="2px"
      bg="#D69E2E"
      position="relative"
      border="none"
      _after={{
        content: '""',
        display: 'block',
        height: '10px',
        width: '10px',
        borderRadius: '50%',
        background: '#D69E2E',
        position: 'absolute',
        top: '-4px',
        left: '100%',
      }}
      _before={{
        content: '""',
        display: 'block',
        height: '10px',
        width: '10px',
        borderRadius: '50%',
        background: '#D69E2E',
        position: 'absolute',
        top: '-4px',
        right: '100%',
      }}
    />
  )
}
