import { ChakraProvider, CSSReset, Box } from '@chakra-ui/react';
import TranscriptState from '../context/transcript/TranscriptState';
import Head from 'next/head';
import Navbar from '../components/layout/Navbar';

const HgApp = ({ Component, pageProps }) => {
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