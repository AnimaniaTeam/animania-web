import styled from '@emotion/styled'
import * as C from '@chakra-ui/react'

export const Container = styled(C.Flex)`
  width: 100%;
  height: auto;
  padding: 1rem 2.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #424242;
`

export const Wrapper = styled(C.Flex)`
  width: 100%;
  height: auto;
  max-width: 85.375rem;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  > img {
    width: auto;
    height: 2.5rem;
  }
`

export const Logo = styled(C.Image)``
