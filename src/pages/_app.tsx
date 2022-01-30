import { ChakraProvider } from '@chakra-ui/react'

import theme from '../theme'
import { AppProps } from 'next/app'

import "../global.css";
import Drawer from "../components/Drawer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Drawer >
        <Component {...pageProps} />
      </Drawer>
    </ChakraProvider>
  );
}

export default MyApp
