import '../styles/globals.css'
import {
  ChakraProvider,
  extendTheme
} from "@chakra-ui/react"
import { mode } from '@chakra-ui/theme-tools'

function Templationary({ Component, pageProps }) {
  return ( <ChakraProvider theme={extendTheme({
    styles: {
      global: (props) => ({
        body: {
          bg: mode('#FFFEFC', 'rgb(25, 25, 25)')(props),
          fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'
        },
        html: {
          colorScheme: mode('light', 'dark')(props)
        }
      }),
    },
  })}>
    <Component {...pageProps} />
  </ChakraProvider> );
}

export default Templationary