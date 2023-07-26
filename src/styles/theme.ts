import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  components: {
    Input: {},
  },

  fonts: {
    workSans: 'var(--font-work-sans)',
    roboto: 'var(--font-roboto)',
  },

  styles: {
    global: {
      html: {
        scrollBehavior: 'smooth',
      },
    },
  },
})
