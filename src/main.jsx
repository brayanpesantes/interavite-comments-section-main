import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { createRoot } from 'react-dom/client';
import App from './App'
import { ProviderComments } from './context/contextComments';
import './index.css'


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <ChakraProvider>
    <ProviderComments>
      <App />
    </ProviderComments>
  </ChakraProvider>
);