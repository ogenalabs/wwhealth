import { ChakraProvider, ScaleFade } from "@chakra-ui/react";
import { MoralisProvider } from "react-moralis";

import theme from "../theme";
import { AppProps } from "next/app";

import "../global.css";
import Drawer from "../components/Drawer";

const APP_ID = process.env.NEXT_PUBLIC_MORALIS_APPLICATION_ID;
const SERVER_URL = process.env.NEXT_PUBLIC_MORALIS_SERVER_URL;

function Application({ Component, pageProps, router }: AppProps) {
  return (
    <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL} initializeOnMount>
      <ChakraProvider resetCSS theme={theme}>
        <Drawer>
          <ScaleFade in={true} key={router.route} initialScale={0.9}>
            <Component {...pageProps} />
          </ScaleFade>
        </Drawer>
      </ChakraProvider>
    </MoralisProvider>
  );
}

export default Application;
