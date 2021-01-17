import { ChakraProvider, CSSReset, Box } from '@chakra-ui/react';
import Head from 'next/head';
import Navbar from '../components/layout/Navbar';

const HgApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <CSSReset />
      <Head>
        <title>Hieroglyph</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default HgApp;