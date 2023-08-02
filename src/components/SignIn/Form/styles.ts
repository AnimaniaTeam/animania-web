import styled from '@emotion/styled'
import * as C from '@chakra-ui/react'

export const Form = styled(C.Flex)`
  width: 100%;
  height: auto;
  max-width: 24rem;
  padding: 3rem 1.5rem;

  gap: 2.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const Logo = styled(C.Image)`
  width: 100%;
  max-width: 15rem;
`

export const ContentFields = styled(C.Flex)`
  width: 100%;
  height: auto;

  gap: 1.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`
