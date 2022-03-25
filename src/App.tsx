import * as React from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './theme/theme';
import { Home } from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Routes>
  </ChakraProvider>
);
