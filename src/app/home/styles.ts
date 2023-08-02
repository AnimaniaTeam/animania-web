'use client'

import styled from '@emotion/styled'
import * as C from '@chakra-ui/react'

export const Container = styled(C.Flex)`
  width: 100%;
  height: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
`

export const Wrapper = styled(C.Flex)`
  width: 100%;
  height: auto;
  padding: 2.5rem;

  flex: 1;
  display: flex;
  flex-direction: column;
`
