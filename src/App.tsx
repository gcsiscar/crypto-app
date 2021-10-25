import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import { theme } from './theme/theme';
import { Header } from './module/Header';
import { Main } from './module/Main';
import { Footer } from './module/Footer';
import { AboutUs } from './module/AboutUs';
import { TradeSecurely } from './module/TradeSecurely';
import { Features } from './module/Features';
import { StartMining } from './module/StartMining';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Header />
    <Main />
    <AboutUs />
    <TradeSecurely />
    <Features />
    <StartMining />
    <Footer />
  </ChakraProvider>
);
