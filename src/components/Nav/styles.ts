import styled from '@emotion/styled'
import * as C from '@chakra-ui/react'

export const Container = styled(C.Flex)`
  width: 100%;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #352973;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);

  > button {
    display: none;

    @media (max-width: 1279px) {
      display: flex;
    }
  }
`

export const Wrapper = styled(C.Flex)`
  position: relative;

  width: 100%;
  height: auto;
  padding: 0.5rem 2rem;
  max-width: 90rem;

  gap: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* > button {
    @media (max-width: 767px) {
      display: none;
    }
  } */

  @media (max-width: 767px) {
    justify-content: center;
  }
`

export const Logo = styled(C.Image)`
  width: auto;
  height: 3rem;
`

export const Navigation = styled(C.Flex)`
  width: auto;
  height: auto;
  margin-right: auto;

  gap: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  > a {
    padding: 0 0.5rem;

    border: 1px solid transparent;
    border-radius: 120px;

    color: #ffffff;
    font-size: 0.875rem;
    font-weight: 500;
    transition: 0.2s;

    &:hover {
      border: 1px solid #ffffff;

      background-color: #352973;
    }
  }

  @media (max-width: 1279px) {
    display: none;
  }
`
