import styled from '@emotion/styled'
import * as C from '@chakra-ui/react'

export const FormControl = styled(C.FormControl)``

export const Checkbox = styled(C.Checkbox)`
  > span:first-of-type {
    border-radius: 4px;

    background-color: #ffffff;
  }

  > span:first-of-type[data-checked] {
    background-color: #4d6f80;
  }

  > span:last-of-type {
    color: #4d6f80;
    font-size: 0.875rem;
    font-weight: 400;
  }
`
