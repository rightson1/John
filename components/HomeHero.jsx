/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useGlobalProvider } from "../utils/themeContext";
const HomeHero = () => {
    const { colors } = useGlobalProvider();
    return <Box className="h-screen">
        <div className=" h-[70%] md:h-[80%] w-screen ">
            <img src="/land.png" alt="" className="h-full w-full object-cover" />
        </div>
        <div className="flex px-4 py-10 md:px-10  justify-between">
            <div className="flex flex-col">
                <Typography className="font-semibold text-[17px]" color={colors.grey[100]} variant="h4" fontFamily="Source Sans Pro">
                    COMPANY PROFILE
                </Typography>
                <Box className="w-[70px] h-[5px]  my-3
        "  bgcolor={colors.yellow[500]}></Box>
            </div>
            <img src="/logo.svg" className="w-[150px] md:w-[200px] -mt-[140px]" alt="" />
        </div>


    </Box>;
};

export default HomeHero;
