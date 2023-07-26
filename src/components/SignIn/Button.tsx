import * as C from '@chakra-ui/react'

interface Button extends C.ButtonProps {
  children?: React.ReactNode
}

export function Button({ children, ...rest }: Button) {
  return (
    <C.Button
      {...rest}
      width={'full'}
      maxWidth={'12rem'}
      borderColor={'#3182CE'}
      borderRadius={'2px'}
      color={'#212121'}
      backgroundColor={'#63B3ED'}
      _hover={{
        opacity: '0.75',
        borderColor: '#3182CE',
        bgColor: '#63B3ED',
      }}
    >
      {children}
    </C.Button>
  )
}
