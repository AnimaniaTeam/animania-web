import { useState, forwardRef, ForwardRefRenderFunction } from 'react'

import { FieldError } from 'react-hook-form'

import * as C from '@chakra-ui/react'
import { MdVisibility, MdVisibilityOff } from 'react-icons/md'

interface IInput extends C.InputProps {
  keyID: string
  isError?: FieldError
  isPassword?: boolean
}

const PInput: ForwardRefRenderFunction<HTMLInputElement, IInput> = (
  { keyID, isError, isPassword = false, ...rest },
  ref,
) => {
  const [show, setShow] = useState(false)

  return (
    <C.FormControl id={keyID}>
      <C.InputGroup>
        <C.Input
          ref={ref}
          {...rest}
          type={isPassword ? (show ? 'text' : 'password') : 'input'}
          borderColor={'#ECC94B'}
          borderRadius={'2px'}
          fontWeight={'400'}
          fontFamily={'lato'}
          backgroundColor={'#FFF59D'}
          _focus={{
            borderColor: '#ECC94B',
            boxShadow: 'none',
          }}
        />

        {isPassword && (
          <C.InputRightElement width={'3rem'}>
            <C.Button
              onClick={() => setShow(!show)}
              width={'min-content'}
              minW={'min-content'}
              padding={'0'}
              _hover={{
                bgColor: 'transparent',
              }}
              backgroundColor={'transparent'}
            >
              {show ? (
                <MdVisibilityOff color={'#1C1B1F'} />
              ) : (
                <MdVisibility color={'#1C1B1F'} />
              )}
            </C.Button>
          </C.InputRightElement>
        )}
      </C.InputGroup>

      {!!isError && (
        <C.Text
          as={'span'}
          color={'#ffffff'}
          fontSize={'0.75rem'}
          fontWeight={'400'}
        >
          {isError.message}
        </C.Text>
      )}
    </C.FormControl>
  )
}

export const Input = forwardRef(PInput)
