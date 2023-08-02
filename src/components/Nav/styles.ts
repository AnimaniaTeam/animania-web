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
  justify-content: space-between;

  > img {
    width: auto;
    height: 2.5rem;
  }
`

export const Logo = styled(C.Image)``

export const Navigation = styled(C.Flex)`
  width: auto;
  height: auto;

  gap: 1rem;
  display: flex;
  align-items: center;
`

export const Profile = styled(C.Flex)`
  width: min-content;
  height: auto;

  gap: 0.25rem;
  display: flex;
  align-items: center;

  > span {
    color: #ffffff;
    font-family: var(--font-lato);
    font-size: 1rem;
    font-weight: 400;
  }
`

export const ButtonLogout = styled.button``
