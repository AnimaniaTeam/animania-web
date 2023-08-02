'use client'

import styled from '@emotion/styled'
import * as C from '@chakra-ui/react'

export const Container = styled(C.Flex)`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(239, 108, 0, 0.8) 100%
  );
`
