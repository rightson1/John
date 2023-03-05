import { Box, Button, Typography } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import Details from "../components/Details";
import HomeHero from "../components/HomeHero";
import Introduction from "../components/Introduction";
import Market from "../components/Market";
import Partners from "../components/Partners";
import Stand from "../components/Stand";

import { useGlobalProvider } from "../utils/themeContext";

export default function Home() {
    const { colors } = useGlobalProvider();
    return (

        <Box className="h-full ">
            <HomeHero />
            <Details />
            <Introduction />
            <Market />
            <Stand />
            <Partners />
        </Box>
    );

}


Home.nolayout = true;
