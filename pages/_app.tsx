import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import TranscriptState from '../context/transcript/TranscriptState';
import Head from 'next/head';
import { AppProps } from 'next/app';
import Navbar from '../components/layout/Navbar';

const HgApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <TranscriptState>
        <CSSReset />
        <Head>
          <title>Hieroglyph</title>
        </Head>
        <Navbar />
        <Component {...pageProps} />
      </TranscriptState>
    </ChakraProvider>
  )
}

export default HgApp;