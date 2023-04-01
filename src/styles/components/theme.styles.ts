import styled from '@emotion/styled'

import * as C from '@chakra-ui/react'

export const Container = styled(C.Flex)`
  width: 97vw;
  height: 97vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BlocoUp = styled(C.Flex)`
  position: absolute;
  top: 0px;
  display: flex;
  justify-content: space-between;
  width: 100vw;
`
export const BlocoDown = styled(C.Flex)`
  position: absolute;
  bottom: 0px;
  display: flex;
  justify-content: space-between;
  width: 100vw;
`
export const Bloco1 = styled(C.Flex)`
  background-color: red;
  padding: 50px;
`

export const Bloco2 = styled(C.Flex)`
  background-color: blue;
  padding: 50px;
`

export const Bloco3 = styled(C.Flex)`
  background-color: yellow;
  padding: 50px;
`

export const Bloco4 = styled(C.Flex)`
  background-color: green;
  padding: 50px;
`
