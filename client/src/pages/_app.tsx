import React from 'react';
import { AppProps } from 'next/app';

import GlobalStyle from 'styles/global';
import { Toaster } from 'react-hot-toast';
import { NavbarProvider } from 'contexts/NavbarContext';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <NavbarProvider>
    <Toaster
      toastOptions={{
        style: {
          maxWidth: '400px',
          fontSize: '2em',
        },
      }}
    />
    <Component {...pageProps} />
    <GlobalStyle />
  </NavbarProvider>
);

export default MyApp;
