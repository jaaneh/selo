import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { DefaultSeo } from 'next-seo'

import SEO from '../../next-seo.config'
import theme from '../theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
