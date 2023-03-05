import { Box, Button, Typography } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import Five from "../components/Five";
import Fourth from "../components/Fourth";
import Hero from "../components/Hero";
import Second from "../components/Second";
import Six from "../components/Six";
import Third from "../components/Third";
import { useGlobalProvider } from "../utils/themeContext";

export default function Home() {
  const { colors } = useGlobalProvider();
  return (

    <Box className="h-full ">
      <Hero />
      <Second />
      <Third />
      <Fourth />
      <Five />
      <Six />
    </Box>
  );

}


Home.layout = true;
