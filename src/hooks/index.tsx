'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { AuthContextProvider } from '~/contexts/AuthContext'

import { theme } from '~/styles/theme'

interface AppProviderProps {
  children?: React.ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <ChakraProvider theme={theme}>
      <AuthContextProvider>{children}</AuthContextProvider>
    </ChakraProvider>
  )
}
