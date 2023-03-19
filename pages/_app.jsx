import "../styles/globals.css";
import "../styles/client.css";
import Head from "next/head";
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../utils/createCache';
import PropTypes from 'prop-types';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider } from "../utils/themeContext";
import Navbar from "../components/Navbar";
import TemporaryDrawer from "../components/Sidebar";
import Footer from "../components/Footer";
import 'swiper/css';
import "swiper/swiper-bundle.css";
function MyApp(props) {

  const clientSideEmotionCache = createEmotionCache();
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <>
      <Head>
        <title>JLM </title>
        <meta name="description" content="JLM" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <CacheProvider value={emotionCache}>
        <ThemeProvider>
          <div className="h-screen w-screen overflow-x-hidden">
            <Navbar />
            <div className="">
              <Component {...pageProps} />
              <TemporaryDrawer />
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}
MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
