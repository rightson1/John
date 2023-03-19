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
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "react-scroll-to-top";
import { Toaster } from "react-hot-toast";
import Navbar from "../components/Navbar";
import TemporaryDrawer from "../components/Sidebar";
import Footer from "../components/Footer";
import HomeNav from "../components/HomeNav";
import PlaceDrawer from "../components/PlaceDrawer";
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
        <AnimatePresence>
          <ThemeProvider>
            {/* {Component.layout ?
              <div className="h-screen w-screen overflow-x-hidden">
                <Navbar />
                <div className="">
                  <Component {...pageProps} />
                  <ScrollToTop smooth color={"#FF6929"} height="15px" className="top" />
                  <Toaster />
                  <TemporaryDrawer />
                  <Footer />
                </div>
              </div> : Component.nolayout ? <div className="h-screen w-screen overflow-x-hidden">
                <div className="">
                  <Component {...pageProps} />
                  <ScrollToTop smooth color={"#FF6929"} height="15px" className="top" />
                  <Toaster />
                  <TemporaryDrawer />

                </div>
              </div> : <div className="h-screen w-screen overflow-x-hidden">
                <HomeNav />
                <div className="">
                  <Component {...pageProps} />
                  <ScrollToTop smooth color={"#FF6929"} height="15px" className="top" />
                  <Toaster />
                  <PlaceDrawer />

                </div>
              </div>
            } */}
            <div className="h-screen w-screen overflow-x-hidden">
              <Navbar />
              <div className="">
                <Component {...pageProps} />
                <TemporaryDrawer />
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </AnimatePresence>
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
