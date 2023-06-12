import { forwardRef, ForwardRefRenderFunction, useState } from 'react'

import { FieldError } from 'react-hook-form'

import {
  Icon,
  Button,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  InputProps,
  FormLabel,
  FormControl,
  Input as CInput,
} from '@chakra-ui/react'

import { Eye, EyeSlash, IconProps } from '@phosphor-icons/react'

interface InputContentProps extends InputProps {
  type: string
  name?: string
  label?: string
  error?: FieldError
  disabled?: boolean

  icon?: React.ComponentType<IconProps>
}

const InputComponentForm: ForwardRefRenderFunction<
  HTMLInputElement,
  InputContentProps
> = ({ label, icon, name, type, error = null, ...rest }, ref) => {
  const [show, setShow] = useState(false)
  const handleClick = () => setShow(!show)

  return (
    <FormControl isInvalid={!!error} w={'100%'}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <InputGroup>
        {!!icon && (
          <InputLeftElement pointerEvents="none">
            <Icon as={icon} />
          </InputLeftElement>
        )}

        <CInput
          ref={ref}
          id={name}
          name={name}
          type={type === 'password' ? (show ? 'text' : 'password') : type}
          borderRadius={'8px'}
          borderColor={'#E53E3E'}
          borderWidth={'1px'}
          backgroundColor={'#FFF59D'}
          _hover={{
            borderColor: '#E53E3E',
          }}
          _focus={{
            borderColor: '#E53E3E',
          }}
          _active={{
            borderColor: '#E53E3E',
          }}
          {...rest}
        />

        {type === 'password' && (
          <InputRightElement>
            <Button
              type="button"
              padding={'0px'}
              backgroundColor={'transparent'}
              _hover={{
                backgroundColor: 'transparent',
              }}
              onClick={handleClick}
            >
              {show ? <EyeSlash size={20} /> : <Eye size={20} />}
            </Button>
          </InputRightElement>
        )}
      </InputGroup>
      {error?.message}
    </FormControl>
  )
}

export const Input = forwardRef(InputComponentForm)
