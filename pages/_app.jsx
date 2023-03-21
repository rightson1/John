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

import Footer from "../components/Footer";
import 'swiper/css';
import "swiper/swiper-bundle.css";
function MyApp(props) {

  const clientSideEmotionCache = createEmotionCache();
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <>
      <Head>
        <title>John Lee Miller | Landscaping, Interior Design, Architecture, Consultancy, and Construction Supplies  </title>
        <meta name="description" content="JLM offers exceptional services in Landscaping, Interior Design, Architecture, Consultancy, and Construction Supplies. We provide our clients with expert solutions and high-quality materials to ensure their satisfaction." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="John Lee Miller" />
        <meta property="og:description" content="JLM offers exceptional services in Landscaping, Interior Design, Architecture, Consultancy, and Construction Supplies. We provide our clients with expert solutions and high-quality materials to ensure their satisfaction." />
        <meta property="twitter:description" content="JLM offers exceptional services in Landscaping, Interior Design, Architecture, Consultancy, and Construction Supplies. We provide our clients with expert solutions and high-quality materials to ensure their satisfaction." />
        <meta property="og:url" content="https://www.jlmillerltd.com" />
        <meta property="og:image" content=" https://www.jlmillerltd.com/logo.png" />
        <meta property="og:type" content="website" />

      </Head>
      <CacheProvider value={emotionCache}>
        <ThemeProvider>
          <div className="h-full  w-screen overflow-visible">
            <Navbar />
            <div className="">
              <Component {...pageProps} />
              {/* <TemporaryDrawer /> */}
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
