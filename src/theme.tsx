import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em'
})

const theme = extendTheme({
  breakpoints,
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
    cssVarPrefix: 'selo'
  },
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`
  },
  colors: {
    black: '#16161D',
    brand: {
      blue: '#3EABF0',
      fog: '#68717E',
      'midnight-alt': '#03060D',
      white: '#FFFFFF',
      gray: '#22262E',
      'dark-gray': '#0F1116',
      green: '#19DB60',
      red: '#FE1149'
    }
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: 'md',
        fontWeight: '500',
        textTransform: 'uppercase'
      },
      variants: {
        'brand-blue': {
          bg: 'brand.blue',
          color: 'brand.white',
          fontSize: 'sm',
          transition: 'box-shadow ease-in-out .15s',
          _hover: {
            boxShadow: '0 0 15px rgba(62, 171, 240, .5)'
          },
          _active: {
            boxShadow: '0 0 15px rgba(62, 171, 240, .5)'
          },
          ':disabled': {
            opacity: 0.6
          },
          ':disabled:hover': {
            bg: 'brand.blue',
            boxShadow: 'none'
          }
        }
      }
    }
  }
})

export default theme
