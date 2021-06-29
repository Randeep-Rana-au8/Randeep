import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import Footer from '../../../libs/Footer';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to portfolio!</title>
      </Head>
      <div className="app">
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default CustomApp;
