import * as C from '../../styles/components/theme.styles'
import React, { ReactNode } from 'react'
type Props = {
  children: ReactNode
}
export default function Theme({ children }: Props) {
  return (
    <C.Container>
      {/* <C.BlocoUp>
      <img src="/topLeft.png" alt="" />
      <img src="/topRight.png" alt="" />
    </C.BlocoUp> */}
      {children}
      {/* <C.BlocoDown>
      <img src="/bottomLeft.png" alt="" />
      <img src="/bottomRight.png" alt="" />
    </C.BlocoDown> */}
    </C.Container>
  )
}
