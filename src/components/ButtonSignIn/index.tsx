import {
  Button as CButton,
  ButtonProps as CButtonProps,
} from '@chakra-ui/react'

interface ButtonProps extends CButtonProps {
  title: string
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <CButton
      w={'max-content'}
      minH={'auto'}
      minW={'auto'}
      px={'1.5rem'}
      py={'1rem'}
      color={'#424242'}
      borderRadius={'8px'}
      borderColor={'#3182CE'}
      borderWidth={'1px'}
      backgroundColor={'#BEE3F8'}
      _hover={{
        borderColor: '#3182CE',
      }}
      _focus={{
        borderColor: '#3182CE',
      }}
      _active={{
        borderColor: '#3182CE',
      }}
      {...rest}
    >
      {title}
    </CButton>
  )
}
