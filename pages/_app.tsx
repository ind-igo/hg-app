import Head from 'next/head';
import { AppProps } from 'next/app';

import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { TranscriptProvider } from 'contexts/transcript';

import Navbar from '../components/layout/Navbar';

const HgApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <TranscriptProvider>
        <CSSReset />
        <Head>
          <title>Hieroglyph</title>
        </Head>
        <Navbar />
        <Component {...pageProps} />
      </TranscriptProvider>
    </ChakraProvider>
  )
}

export default HgApp;