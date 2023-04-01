import styled from '@emotion/styled'
import { Flex } from '@chakra-ui/react'

export const Container = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50vw;
  height: 80%;
  gap: 50px;
`

export const Form = {
  display: 'flex',
  gap: '20px',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column' as const,
  width: '100%',
}

export const Input = styled(Flex)`
  border-radius: 10px;
  font-size: 1.2rem;
  background-color: #fff59d;
  width: 45%;

  @media (max-width: 1600px) {
    width: 50%;
  }

  @media (max-width: 1200px) {
    width: 70%;
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`

export const EyeIcon = styled(Flex)`
  position: relative;
  top: 70%;
  left: 0%;
  transform: translateY(-50%);
  cursor: pointer;
`

export const Block = styled(Flex)`
  background-color: red;
  padding: 70px;
`

export const ErrorArea = styled(Flex)`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
  width: 40%;

  @media (max-width: 1600px) {
    width: 50%;
  }

  @media (max-width: 1200px) {
    width: 70%;
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`

export const ErrorMessage = styled(Flex)`
  color: red;
  font-size: 20px;
  font-weight: bold;
`

export const Button = styled.button`
  padding: 25px 50px;
  background-color: #bee3f8;
`
